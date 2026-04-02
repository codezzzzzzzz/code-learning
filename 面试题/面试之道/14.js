console.log(1);
async function A() {
  await B()
  console.log(2);
}
async function B() {
  console.log(3);
}
A()

setTimeout(() => {
  console.log(4);
}, 0);

new Promise((resolve, reject) => {
  console.log(5);
  resolve()  
})
.then(() => {
  console.log(6);
})
.then(() => {
  console.log(7);
})
console.log(8);