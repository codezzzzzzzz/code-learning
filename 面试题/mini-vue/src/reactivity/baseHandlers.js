import { isObject } from "../shared/index.js";
import { reactive } from "./reactive.js";
import { track, trigger } from "./effect.js";

const get = createGetter()
const set = createSetter()

function createGetter() { 
  return function(target, key, receiver) {
    const res = Reflect.get(target, key, receiver)
    // 在值初次被读取时就要进行依赖收集
    track(target, 'get', key)

    if (isObject(res)) { // 子对象递归
      return reactive(res)
    }
    return res
  }
}

function createSetter() {
  return function(target, key, value, receiver) {
    const res = Reflect.set(target, key, value, receiver)
    // 触发依赖
    trigger(target, 'set', key)
    return res
  }
}

export const mutableHandlers = {
  get,
  set
}