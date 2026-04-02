function retry(fn, maxTimes = 3) {
  let count = 1
  return new Promise((resolve, reject) => {
    const repeat = () => {
      fn()
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        count++
        if (count > maxTimes) {
          reject(err)
        } else {
          repeat()
        }
      })
    }

    repeat()
  })
}



function test() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const time = Math.floor(Math.random() * 10)
      console.log(time)
      if (time < 8) {
        reject('失败')
      } else {
        resolve('成功')
      }
    }, 500)
  })
}

retry(test, 3)
.then(res => {
  console.log(res)
})
.catch(err => {
  console.log(err)
})