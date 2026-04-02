function A() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('a');
      // reject('a no')
      resolve('a ok')
    }, 1000);
  })
}
function B() {
  console.log('b');
}

// 0ms后 A 就返回了一个promise对象，状态为 pending
// 1000ms后 A 返回的promise对象的状态变为resolved
// then 中的回调函数才会执行
// A()
// .then(
//   (res) => {
//     return B()
//   },
//   (err) => {
//     console.log(err);
//   }
// )



class MyPromise {
  constructor(executor) {
    this.status = 'pending'  // 状态
    this.value = null  // 成功的结果
    this.reason = null  // 失败的原因
    this.onFulfilledCallbacks = []  // 存放成功的回调函数
    this.onRejectedCallbacks = []  // 存放失败的回调函数

    const resolve = (value) => {
      if (this.status === 'pending') {
        this.value = value
        this.status = 'fulfilled'
        this.onFulfilledCallbacks.forEach(fn => fn(value))
      }
    }
    const reject = (reason) => {
      if (this.status === 'pending') {
        this.reason = reason
        this.status = 'rejected'
        this.onRejectedCallbacks.forEach(fn => fn(reason))
      }
    }

    executor(resolve, reject)
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

    // 返回一个新的promise对象
    let newPromise = new MyPromise((resolve, reject) => {
      if (this.status === 'fulfilled') {
        setTimeout(() => {
          try {
            const result = onFulfilled(this.value) // 作为异步任务
            if (result instanceof MyPromise) {
              newPromise = result
            } 
            resolve(result)
          } catch (error) {
            reject(error)
          }
          
        });
      }
      if (this.status === 'rejected') {
        setTimeout(() => {
          try {
            const result = onRejected(this.reason) // 作为异步任务
            if (result instanceof MyPromise) {
              newPromise = result
            } 
            resolve(result)
          } catch (error) {
            reject(error)
          }
          
        });
      }
      if (this.status === 'pending') {
        this.onFulfilledCallbacks.push((value) => {
          setTimeout(() => {
            try {
              const result = onFulfilled(value)
              if (result instanceof MyPromise) {
                newPromise = result
              }
              resolve(result)
            } catch (error) {
              reject(error)
            }
          })
        })

        // 2222
      }
    })
    return newPromise
  }
}


let p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 1000);
})
p.then(res => {
  console.log(res, 'then');
})