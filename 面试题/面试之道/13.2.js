// function *foo(x) {
//   let y = 2 * (yield (x + 1))
//   let z = yield (y / 3)
//   return (x + y + z)
// }

// let it = foo(5)  // new Generator() // 迭代器
// console.log(it.next()); // { value: 6, done: false }
// console.log(it.next(12)); // { value: 8, done: false }
// console.log(it.next(13)); // { value: 42, done: true }



function ajax(url, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      callback(url)
      resolve()
    }, Math.random() * 1000);
  })
}


function *fetch() {
  yield ajax('url', () => {})  // 1000
  yield ajax('url1', () => {}) // 500
  yield ajax('url2', () => {}) // 700
}
let it = fetch()
let res1 = it.next()
res1.value.then(() => {
  let res2 = it.next()
  return res2.value
})
.then(() => {
  let res3 = it.next()
})

// console.log(res1);  // {value: prmise<pending>, done: false}

// let res2 = it.next(res1)
// let res3 = it.next()