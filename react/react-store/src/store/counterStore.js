import { makeAutoObservable } from 'mobx'

class CounterStore {
  count = 0
  list = [1, 2, 3, 4, 5, 6]

  constructor() {
    makeAutoObservable(this)  // 实时观察 this 中的数据
  }

  addCount() {
    this.count++
    console.log(this.count);
  }

  get filterList() {
    return this.list.filter(item => item > 2)
  }

  changeList() {
    this.list.push(7, 8, 9)
  }

}

const counterStore = new CounterStore()
export default counterStore