<template>
  <div class="home">
    <div class="header">
      <div class="type-wrap" @click="changType">
        <span class="title">{{currentType.name || '全部类型'}}</span>
        <van-icon name="qr" size="20"/>
      </div>
      <div class="data-wrap">
        <span class="time" @click="changeTime">
          {{currentTime[0]}}年{{currentTime[1]}}月
          <van-icon class="arrow" name="play" />
        </span>
        <span class="expense">总支出¥{{bill.totalExpense}}</span>
        <span class="income">总收入¥{{bill.totalIncome}}</span>
      </div>
    </div>
    <div class="content">
      <van-pull-refresh class="refresh" v-model="refreshLoading" @refresh="onRefresh">
        <van-list
          class="list"
          v-model:loading="loadingMore"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          offset="0"
        >
          <CardItem class="card-item" v-for="(item,index) in bill.list" :key="index" :billItem="item"/>
        </van-list>

      </van-pull-refresh>
    </div>
    <div class="save" @click="() => popAddRef.show = true">
      <van-icon name="records-o" size="20"/>
      <span>记一笔</span>
    </div>
  </div>

  <PopType ref="popTypeRef" @handleType="selectType"/>
  <PopTime ref="popTimeRef" @handleTime="selectTime"/>
  <PopAdd ref="popAddRef" @refresh="onRefresh"/>
</template>

<script setup>
import PopType from '../components/PopType.vue';
import PopTime from '../components/PopTime.vue';
import PopAdd from '../components/PopAdd.vue';
import formateDate from '@/utils/date.js'
import CardItem from '../components/CardItem.vue';
import { reactive, ref } from 'vue';
import axios from '@/api'

// 选择类型
const currentType = ref({});
// 类型弹出框
const popTypeRef = ref(null);
// 时间弹出框
const popTimeRef = ref(null);
// 新增弹出框
const popAddRef = ref(null);
// 选择时间
const currentTime = ref(formateDate(new Date()).slice(0, -1));
// 控制下拉刷新展示
const refreshLoading = ref(false);
// 上拉加载更多展示
const loadingMore = ref(false);
// 账单列表
const bill = reactive({
  list: [],
  totalExpense: 0,
  totalIncome: 0,
  totalPage: 0
})
// 列表数据是否加载完毕
const finished = ref(false);
const page = ref(1);


// list 列表加载时
const onLoad = async() => {
  await getBillList()
  // console.log('onLoad', page.value, bill.totalPage);
  if (page.value > bill.totalPage) { // 已经拿完了所有数据
    finished.value = true;
  }
  loadingMore.value = false;
}

// 请求账单数据
const getBillList = async() => {
  // await xxx  当 xxx 执行完毕后await 会修改 async 的状态
  const { data } = await axios.get(`/api/bill/list?date=${currentTime.value.join('-')}&type_id=${currentType.value.id || 'all'}&page=${page.value}&size=5`)
  console.log(data);
  // bill.value = data;
  // bill.list = data.list;
  // bill.list = [...bill.list, ...data.list];
  bill.list = bill.list.concat(data.list);
  bill.totalExpense = data.totalExpense;
  bill.totalIncome = data.totalIncome;
  bill.totalPage = data.totalPage;
  page.value++
  // 正确的渲染页面
  // 实现下拉刷新
  // 实现上拉加载更多
  // 收入和支出在页面上的颜色不同
}


const onRefresh = () => {
  // 重置数据
  page.value = 1;
  bill.list = [];
  refreshLoading.value = true;
  getBillList().then(() => {
    refreshLoading.value = false;
  })
  // 请求当前页面的数据
}

const selectTime = async(time) => {
  currentTime.value = time;
  page.value = 1;
  bill.list = []
  await getBillList()
  finished.value = false;
}

const changeTime = () => {
  popTimeRef.value.show = true;
}

const selectType = async(type) => {
  currentType.value = type;
  page.value = 1;
  bill.list = []
  await getBillList()
  finished.value = false;
}

const changType = () => {
  popTypeRef.value.show = true;
}
</script>

<style lang="less" scoped>
.home{
  .header{
    background-color: rgb(55, 167, 98);
    height: 80px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    font-size: 16px;
    color: #fff;
    .type-wrap{
      background-color: rgb(70, 177, 113);
      padding: 10px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      .title{
        padding-right: 10px;
        margin-right: 10px;
        border-right: 1px solid rgb(94, 196, 136);
      }
    }
    .data-wrap{
      margin-top: 10px;
      font-size: 14px;
      .time{
        margin-right: 10px;
        .arrow{
          transform: rotate(90deg);
        }
      }
      .expense{
        margin-right: 10px;
      }
    }
  }
  .content{
    height: calc(100vh - 170px);
    padding: 10px;
    background-color: rgb(232, 232, 232);
    overflow-y: scroll;
    // .refresh{
    //   height: 100%;
    //   .list{
    //     height: 100%;
    //     overflow: auto;
    //   }
    // }
    .card-item{
      margin-top: 10px;
      border-radius: 10px;
      overflow: hidden;
    }
    .card-item:first-child{
      margin-top: 0;
    }
  }
  .save{
    position: fixed;
    width: 80px;
    height: 40px;
    bottom: 80px;
    right: 20px;
    border-radius: 100px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    color: #37a762;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>