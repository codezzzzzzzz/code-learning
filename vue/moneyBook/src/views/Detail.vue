<template>
  <div class="detail">
    <Head title="账单详情" />
    <div class="content">
      <div class="card">
        <div class="title">
          <i class="iconfont" :class="[icons[item.type_name], item.pay_type === 1 ? 'expense' : 'income']"></i>
          <p>{{ item.type_name }}</p>
        </div>
        <div class="money">
          {{ item.pay_type === 1 ? '-' : '+' }}{{ item.amount }}
        </div>
        <div class="data">
          <div class="date">
            <i>记录时间</i>
            <span>{{ formateDate2(item.date)[0] }}年 {{ formateDate2(item.date)[1] }} 月 {{ formateDate2(item.date)[2] }}
              日 {{ formateDate2(item.date)[3] }}:{{ formateDate2(item.date)[4] }}</span>
          </div>
          <div class="from">
            <i>来源</i>
            <span>支付宝</span>
          </div>
          <div class="remark">
            <i>备注</i>
            <span>{{ item.remark }}</span>
          </div>

        </div>
        <div class="bottom">
          <div class="delete" @click="deletebill">
            <van-icon name="delete-o" />
            <span>删除</span>
          </div>
          <div class="edit" @click="editBill">
            <van-icon name="edit" />
            <span>编辑</span>
          </div>
        </div>
      </div>
    </div>

  </div>

  <PopEdit ref="popEditRef" :billDetail="item" @refresh="onRefresh"/>
</template>

<script setup>
import Head from '@/components/Head.vue'
import axios from '@/api/index.js';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { formateDate2 } from '../utils/date';
import icons from '../utils/icons';
import { showConfirmDialog, showSuccessToast } from 'vant';
import PopEdit from '../components/PopAdd.vue';

const route = useRoute();
const router = useRouter();
const id = route.query.id;
const item = ref({});
const popEditRef = ref(null);

const getBillDetail = async () => {
  axios.get(`/api/bill/detail?id=${id}`)
  .then(res => {
    console.log(res);
    item.value = res.data;
  })
}
getBillDetail()

const deletebill = async () => {
  showConfirmDialog({
    message:
      '确定删除该条账单吗？',
  })
    .then(async () => {
      // on confirm
      await axios.post(`/api/bill/delete`, {
        id: id
      })
      showSuccessToast('删除成功');
      router.push('/home')

    })
    .catch(() => {
      // on cancel
    });

}

const editBill = () => {
  popEditRef.value.show = true;
}

const onRefresh = () => {
  getBillDetail()
}

// 获取账单详情    get  /api/bill/detail?id=xxx
// 点击删除，弹出确认框，点击确认，删除该条账单   post   /api/bill/delete   id:xxx

</script>

<style lang="less">
.detail {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;

  .head {
    background-color: #fff;
    margin-bottom: 16px;
  }

  .content {
    flex: 1;
    background-color: #f5f5f5;

    .card {
      background: #fff;
      border-radius: 10px;
      padding: 16px;
      margin: 16px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      .title {
        display: flex;
        align-items: center;
        justify-content: center;

        .iconfont {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          margin-right: 8px;
          display: inline-block;
          text-align: center;
          line-height: 24px;
          background-color: #4caf50;
          color: #fff;
        }

        .income {
          background-color: #f2b63b !important;
        }

        .icon-color {
          color: #fff;
        }

        p {
          font-size: 14px;
          font-weight: bold;
          color: #333;
        }
      }

      .money {
        font-size: 28px;
        font-weight: bold;
        text-align: center;
        padding: 22px 0;
      }

      .data {
        border-bottom: 1px solid #f0f0f0;
        padding-bottom: 40px;

        .date,
        .from,
        .remark {
          display: flex;
          align-items: center;
          margin-top: 20px;

          i {
            font-size: 14px;
            color: #999;
            width: 80px;
            /* 保持固定宽度，保证对齐 */
          }

          span {
            font-size: 14px;
            color: #333;
            margin-left: 8px;
            text-align: left;
          }
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;

        .delete,
        .edit {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          cursor: pointer;

          .iconfont {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            margin-right: 6px;
          }

          &.delete {
            color: #e53935;
          }
        }
      }
    }
  }
}
</style>