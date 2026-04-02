function a(cb, cb2, cb3) {
  setTimeout(() => {
    console.log('a 执行完毕')
    cb(cb2, cb3)
  }, 1000)
}

function b(cb, cb3) {
  setTimeout(() => {
    console.log('b 执行完毕')
    cb(cb3)
  }, 1500)
}

function c(cb) {
  setTimeout(() => {
    console.log('c 执行完毕')
    cb()
  }, 500)
}

function d() {
  console.log('d 执行完毕');
}

a(b, c, d)