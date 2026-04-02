<template>
  <div class="item">
    <div class="item-head">
      <p class="count">第 {{state.num + 1}}/{{state.questionList.length}} 题</p>
      <div class="rang">
        <div class="rang-bar" :style="{width: (state.num + 1) / state.questionList.length * 100 + '%'}"></div>
      </div>
    </div>
    <div class="item-question">
      <div class="item-question__card" v-if="state.questionList.length">
        <div class="num">Q{{state.num+1}}</div>
        <p class="topic">{{state.questionList[state.num].topic_name}}</p>
        <ul>
          <li v-for="(item, index) in state.questionList[state.num].topic_answer">
            <input type="radio" name="ansower" :value="item.topic_answer_id" v-model="currentAnswerId">
            <span>{{item.answer_name}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="item-next">
      <button class="btn" @click="nextItem" v-if="state.num + 1 < state.questionList.length">下一题</button>
      <button class="btn" @click="submit" v-else>提交</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import useQuestionStore from '../store/question.js'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const questionStore = useQuestionStore()
const { state } = storeToRefs(questionStore)  // state 是一个响应式对象

onMounted(() => {  // 当前页面加载完成后
  questionStore.getQuestionList()
})


const currentAnswerId = ref(null)
const nextItem = () => {
  // 保存当前答案id
  // 下一题
  // 进度条
  if (currentAnswerId.value === null) {
    return 
  }
  questionStore.saveAnswerList(currentAnswerId.value)
  questionStore.addNum()
  currentAnswerId.value = null
}


const router = useRouter()
const submit = () => {
  router.push('/score')
}
</script>

<style lang="less" scoped>
.item{
  background-color: #F0F7FF;
  min-height: 100vh;
  .item-head{
    height: 5.6rem;
    padding: 1.3rem 1.4rem;
    box-sizing: border-box;
    background-color: #fff;
    .count{
      font-size: 1.2rem;
      color: #4B5563;
      text-align: center;
    }
    .rang{
      width: 100%;
      height: 0.4rem;
      background-color: #E2E8F0;
      border-radius: 10px;
      margin-top: 8px;
      &-bar{
        height: 100%;
        background-color: #15B8A6;
        width: 10%;
        border-radius: 10px;
      }
    }
  }
  .item-question{
    padding: 1.4rem 1.4rem 0 1.4rem; 
    &__card{
      padding: 2.1rem;
      background-color: #fff;
      border-radius: 16px;
      .num{
        font-size: 2.1rem;
        font-weight: 500;
      }
      .topic{
        font-size: 1.4rem;
        color: #374151;
        margin-top: 7px;
      }
      ul{
        margin-top: 2.1rem;
        li{
          height: 5rem;
          background-color: #F9FAFB;
          border-radius: 8px;
          display: flex;
          align-items: center;
          margin-bottom: 14px;
          font-size: 14px;
          color: #374151;
          input{
            margin: 0 1.4rem;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
  .item-next{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 14px;
    box-sizing: border-box;
    background-color: #fff;
    .btn{
      width: 100%;
      height: 4.2rem;
      background-color: #15B8A6;
      color: #fff;
      border: none;
      border-radius: 8px;
    }
  }
}
</style>