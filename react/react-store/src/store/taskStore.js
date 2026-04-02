import { makeAutoObservable } from "mobx";

class TaskStore {
  list = ['html', 'css', 'js']
  constructor() {
    makeAutoObservable(this)
  }
}

const taskStore = new TaskStore()
export default taskStore