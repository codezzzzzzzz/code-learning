function xq() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('章总相亲了');
      resolve('相亲顺利')
    }, 2000)
  })
}

function marry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('章总结婚了');
      resolve('结婚快乐')
    }, 1000)
  })
}

function baby() {
  console.log('小章出生了');
}

xq()
.then((res) => {
  console.log(res);
  return marry()
})
.then((res) => {
  console.log(res);
  baby()
})

// xq().then((res) => {
//   console.log(res);
//   marry().then((res) => {
//     baby()
//   })
// })
