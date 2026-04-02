// async await

function a() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('a');
      resolve()
    }, 1000)
  })
}

function b() {
  console.log('b');
}

async function fn() {
  // await a()
  // await b()
  // await c()
  // d()
}
console.log(fn());
