import { defineStore } from 'pinia'
import axios from 'axios'
import { reactive } from 'vue'

const useQuestionStore = defineStore('question', () => {
  const state = reactive({
    questionList: [],  // 题目
    answerList: [],  // 答案
    num: 0,  // 记录当前是第几个题目
  })

  // 仓库中的变量想要修改值，一定要用仓库中定义的函数
  function getQuestionList() { // 修改questionList
    // 获取题目
    axios.get('https://mock.mengxuegu.com/mock/6767738f98077b17fe6792e2/question-naire')
      .then(res => {
        console.log(res);
        state.questionList = res.data.questions
      })
  }

  function saveAnswerList(answer) {
    state.answerList.push(answer)
  }

  function addNum() {
    state.num++
  }


  return {
    state,
    getQuestionList,
    saveAnswerList,
    addNum
  }
})

export default useQuestionStore