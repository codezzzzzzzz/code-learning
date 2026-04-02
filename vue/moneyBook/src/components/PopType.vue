<template>
  <van-popup v-model:show="show" position="bottom" round closeable>
    <div class="pop">
      <div class="content">
        <div class="all" :class="{'active': id === 'all'}" @click="chooseType({id: 'all'})">全部类型</div>

        <div class="list">
          <div class="title">支出</div>
          <div class="exponse-wrap item">
            <p v-for="item in expense" :class="{'active': id === item.id}" :key="item.id" @click="chooseType(item)">{{item.name}}</p>
          </div>
        </div>

        <div class="list">
          <div class="title">收入</div>
          <div class="income-wrap item">
            <p v-for="item in income" :class="{'active': id === item.id}" :key="item.id" @click="chooseType(item)">{{item.name}}</p>
          </div>
        </div>

      </div>
    </div>
  </van-popup>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import axios from '@/api/index.js';

const show = ref(false);
const expense = ref([]);
const income = ref([]);

// 获取所有的类型
onMounted(async() => {
  const res = await axios.get('/api/type/list')
  // console.log(res.data.list);
  expense.value = res.data.list.filter(item => item.type === '1');
  income.value = res.data.list.filter(item => item.type === '2');
})

const id = ref('all');
const emits = defineEmits(['handleType']);  // 定义一个事件
const chooseType = (item) => {
  // 点谁谁就要加 active 类名
  // 父组件展示这个 item.name
  // 关闭弹框
  id.value = item.id;
  show.value = false;
  emits('handleType', item);
}


defineExpose({
  show
})
</script>

<style lang="less" scoped>
.pop{
  max-height: 70vh;
  background-color: #f5f5f5;
  .content{
    padding: 20px;
    font-size: 16px;
    .all{
      display: inline-block;
      padding: 14px 20px;
      background-color: #fff;
      border-radius: 2px;
    }
    .list{
      margin-top: 10px;
      .title{
        font-size: 14px;
        color: #999;
        margin: 10px 0;
      }
      .item{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        p{
          text-align: center;
          padding: 14px 0;
          background-color: #fff;
          border-radius: 2px;
        }
      }
    }
  }
}

.active{
  background-color: rgb(54, 169, 98) !important;
  color: #fff !important;
}
</style>