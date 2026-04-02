function ajax(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

function foo() {
  return ajax(1000)
} 


foo().then(() => {
  console.log('done')
})
