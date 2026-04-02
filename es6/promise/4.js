function a() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('a');
      // resolve('a 执行完毕')
      reject('a失败了')
    }, 1000)
  })
}

function b() {
  console.log('b');
}

a()
.then(res => {
  console.log(res);
})
.catch(err => {
  console.log(err);
})