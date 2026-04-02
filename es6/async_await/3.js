async function a() {
  setTimeout(function() {
    console.log('a');
    return Promise.resolve()
  }, 1000)
}

function b() {
  console.log('b');
}

async function fn() {
  await a()
  b()
}
fn()
