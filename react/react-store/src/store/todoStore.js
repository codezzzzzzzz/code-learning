import { makeAutoObservable } from "mobx";

class TodoStore {
  list = [
    {
      id: 1,
      title: '学习react',
      completed: false
    },
    {
      id: 2,
      title: '学习vue',
      completed: true
    }
  ]
  constructor() {
    makeAutoObservable(this)
  }
}

export default new TodoStore()