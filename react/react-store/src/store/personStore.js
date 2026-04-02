import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class PersonStore {
  singers = []

  constructor() {
    makeAutoObservable(this)  // 实时观察 this 中的数据
  }

  async getSingers() {
    const res = await axios.get('https://mock.mengxuegu.com/mock/66585c4db462b81cb3916d3e/songer/songer')
    console.log(res);
    this.singers = res.data.data
  }

}

const personStore = new PersonStore()
export default personStore