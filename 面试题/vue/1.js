// async function fn() {
//   return new Promise(resolve => {
//     resolve(1)
//   })

//   return 1  // 返回一个 Promise 对象，状态为 resolved，值为 1
// }

// fn().then(console.log)




function fn() {
  return new Promise(resolve => {
    resolve(1)
  })
  .then(() => 2)   
} 

fn()
.then((res) => {
  console.log(res)
  return Promise.resolve(3)
})
.then((x) => {
  console.log(x)
})