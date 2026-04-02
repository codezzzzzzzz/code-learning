function getJson() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log(2);
      resolve(2)
    }, 2000)
  })
}

// 将 async，await 翻译成 promise
function testAsync() {
  return Promise.resolve().then(() => {
    return getJson()
  })
  .then((res) => {
    console.log(3, res);
  })

  // let res = await getJson()
  // console.log(3, res);
}
testAsync()