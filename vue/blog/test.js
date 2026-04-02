function a() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
}

function b() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    }, 1500)
  })
}

function c() {
  console.log('c');
}

async function foo() {
  const res = await Promise.all([a(), b()])
  console.log(res);
}

foo()


