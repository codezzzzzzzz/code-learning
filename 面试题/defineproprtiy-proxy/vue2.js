let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype)

Array.from(['push', 'pop', 'shift', 'unshift']).forEach(method => {
  proto[method] = function() {
    oldArrayPrototype[method].call(this, ...arguments)
    updateView()
  }
})


function observer(target) {
  if (typeof target !== 'object' || target == null) {
    return target
  }

  if (Array.isArray(target)) {
    target.__proto__ = proto
    return
  }

  for (let key in target) {
    defineReactive(target, key, target[key])
  }
}

function defineReactive(target, key, value) {
  if (typeof value === 'object' && value !== null) {
    observer(value)
  }
  
  Object.defineProperty(target, key, {  // 数据劫持
    get() {
      return value
    },
    set(newVal) {
      if (newVal !== value) {
        value = newVal
        updateView()
      }
    }
  })
}




function updateView() {
  console.log('视图更新')
}

let data = {
  name: '阿炜',
  age: {
    n: 18
  },
  like: ['吃饭', '睡觉']
}

observer(data)

// data.like.push('coding')  // push无法触发劫持函数中的 set
data.sex = 'boy'
console.log(data);




