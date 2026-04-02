<template>
  <van-popup position="bottom" round v-model:show="show" closeable>
    <div class="add-wrap">
      <div class="head">
        <div class="left">
          <span @click="changeType('expense')" :class="{'active': state.payType === 'expense'}">支出</span>
          <span @click="changeType('income')" :class="{'active': state.payType === 'income'}">收入</span>
        </div>
        <div class="right" @click="showTime = true">
          <span>{{state.date[1]}}月{{state.date[2]}}日 <van-icon name="play" style="transform: rotate(90deg);" /></span>
        </div>
      </div>
      <div class="money">
        <span class="icon">¥</span>
        <span class="amount">{{state.amount}}</span>
      </div>
      <div class="type-wrap">
        <div class="expense grid" v-if="state.payType === 'expense'">
          <div class="item" v-for="item in state.expense" :key="item.id" @click="selectType(item)">
            <i class="iconfont" :class="[icons[item.name], state.currentType.id === item.id ? 'is-active' : '']"></i>
            <p>{{item.name}}</p>
          </div>
        </div>
        <div class="income grid" v-else>
          <div class="item" v-for="item in state.income" :key="item.id" @click="selectType(item)">
            <i class="iconfont" :class="[icons[item.name], state.currentType.id === item.id ? 'is-active' : '']"></i>
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
      <div class="remark">
        <input type="text" placeholder="添加备注" v-model="state.remark"/>
      </div>
      <div class="keyboard">
        <van-number-keyboard
          show
          theme="custom"
          extra-key="."
          close-button-text="确定"
          @input="onInput"
          @delete="onDelete"
          @close="addBill"
        />
      </div>
    </div>
  </van-popup>

  <van-popup position="bottom" round v-model:show="showTime">
    <van-date-picker
      v-model="state.currentDate"
      title="选择日期"
      :min-date="new Date(2020, 0, 1)"
      :max-date="new Date()"
      @cancel="() => showTime = false"
      @confirm="selectTime"
    />
  </van-popup>
</template>

<script setup>
import axios from '@/api/index.js';
import { ref, onMounted, reactive, watch } from 'vue';
import icons from '@/utils/icons.js';
import formateDate, { formateDate2 } from '@/utils/date.js';
import { showToast } from 'vant';

const props = defineProps({
  billDetail: {
    type: Object,
    default: () => ({})
  }
})

watch(() => props.billDetail.pay_type, (newVal) => {
  if (newVal === 2) {
    state.payType = 'income';
  } else {
    state.payType = 'expense';
  }
  state.date = formateDate2(props.billDetail.date)
  state.currentType = {
    id: props.billDetail.type_id, 
    name: props.billDetail.type_name
  }
  state.amount = props.billDetail.amount
  state.remark = props.billDetail.remark
})

const show = ref(false);
const showTime = ref(false);
const state = reactive({
  expense: [],
  income: [],
  payType: 'expense',  // expense 支出 income 收入
  currentDate: formateDate(new Date()),
  date: formateDate(new Date()),  // 确定的日期 formateDate2(props.billDetail.date)
  currentType: {},
  remark: '',  // 备注
  amount: ''  // 金额
})

onMounted(async() => {
  const res = await axios.get('/api/type/list')
  console.log(res);
  state.expense = res.data.list.filter(item => item.type === '1')
  state.income = res.data.list.filter(item => item.type === '2')
  state.currentType = state.expense[0]

  if (props.billDetail.type_id) {
    state.currentType = {
      id: props.billDetail.type_id, 
      name: props.billDetail.type_name
    }
  }
});

const changeType = (type) => {
  state.payType = type;
}
const selectTime = () => {
  state.date = state.currentDate;
  showTime.value = false;
  // console.log(state.date);
}
const selectType = (item) => {
  // console.log(item);
  state.currentType = item
}
const onInput = (val) => {
  if (val == '.' && state.amount.includes('.')) return;
  if (state.amount.includes('.') && state.amount.split('.')[1].length >=2) return
  state.amount += val;
}
const onDelete = () => {
  state.amount = state.amount.slice(0, -1);
}

const emit = defineEmits(['refresh'])
const addBill = async() => {
  if (Number.isNaN(Number(state.amount)) || state.amount == '') {
    showToast('请输入正确的金额')
    return;
  }
  // 需要给后端的参数
  
  const params = {
    amount: Number(state.amount).toFixed(2),
    type_id: state.currentType.id,
    type_name: state.currentType.name,
    date: new Date(state.date.slice(0, 3).join('-')).getTime(),
    pay_type: state.payType == 'expense' ? 1 : 2,
    remark: state.remark,
    id: props.billDetail.id
  }
  if (props.billDetail.id) { // 编辑
    await axios.post('/api/bill/update', params)
  } else { // 添加
    await axios.post('/api/bill/add', params)
    // 清空数据
    state.currentType = state.expense[0];
    state.date = formateDate(new Date());
    state.amount = '';
    state.remark = '';
    state.payType = 'expense';
  }
  
  show.value = false;
  // 促使父组件重新请求数据
  emit('refresh')
  // console.log(res);
  
}

defineExpose({
  show
})
</script>

<style lang="less" scoped>
.add-wrap{
  padding: 60px 20px 0px;
  .head{
    display: flex;
    justify-content: space-between;
    span{
      padding: 5px 10px;
      background-color: rgb(245, 245, 245);
      margin-right: 10px;
      border-radius: 4px;
      color: #666;
    }
  }
  .money{
    padding: 30px 0;
    font-size: 30px;
    font-weight: bold;
    border-bottom: 1px solid #f1f1f1;
    .amount{
      margin-left: 10px;
    }
  }
  .type-wrap{
    margin: 10px 0;
    height: 110px;
    overflow-y: scroll;
    .grid{
      display: grid;
      grid-template-columns: repeat(6,1fr);
      text-align: center;
      grid-column-gap: 20px;
      grid-row-gap: 10px;
      .iconfont{
        width: 30px;
        height: 30px;
        display: inline-block;
        line-height: 30px;
        border-radius: 50%;
        text-align: center;
        background-color: #eee;
        color: #999;
        margin-bottom: 5px;
        &.is-active{
          background-color: #37a762;
          color: #fff;
        }
      }
    }
  }
  .remark{
    margin: 15px 0;
    input{
      width: 100%;
      border-radius: 4px;
      border: none;
      padding: 5px 0px;
      box-sizing: border-box;
      font-size: 16px;
    }
  }
  .keyboard{
    height: 244px;
  }
}
.active{
  background-color: rgb(230, 247, 238) !important;
  color: #37a762 !important;
}
</style>