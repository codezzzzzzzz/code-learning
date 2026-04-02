function getData() {
  return 1
}
function getAsyncData() {
  return Promise.resolve().then(() => {
    return 1
  })
}

function getPromise() {
  return Promise.resolve().then(() => {
    return new Promise(function (resolve, reject) {
      resolve(1)
    })
  })
}

function test () {
  return Promise.resolve()
  .then(() => {
    let a = 2
    let c = 1
    return getData()
  })
  .then(() => {
    let d = 3
    return getPromise()
  })
  .then(() => {
    let e = 4
    return getAsyncData()
  })
  .then(() => {
    return 2
  })

  let a = 2
  let c = 1
  await getData()
  let d = 3
  await getPromise()
  let e = 4
  await getAsyncData()
  return 2
}