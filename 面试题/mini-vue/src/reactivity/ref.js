import { reactive } from "./reactive.js";
import { isObject } from "../shared/index.js";
import { track, trigger } from "./effect.js";

export function ref(val) {
  return new RefImpl(val)
}


class RefImpl {
  constructor(val) {
    this._val = convert(val)
  }

  get value() {
    track(this, 'get', 'value')
    return this._val
  }
  set value(newVal) {
    if (newVal !== this._val) {
      this._val = newVal
      trigger(this, 'set', 'value')
    }
  }

}

function convert(val) {
  return isObject(val) ? reactive(val) : val  
}


// const n = ref({a: 1})
// n.value.a = 2
// console.log(n.value.a);
