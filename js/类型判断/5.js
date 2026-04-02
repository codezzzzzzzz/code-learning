let a = 1  // a = new number(1)
// a.toString = function(){}
// a.toString()
let b = {}

console.log(Object.prototype.toString.call(b)); // '[object Object]'



// function test(){
//   console.log(this.b);
// }
// let obj = {
//   b: 1
// }
// test.call(obj)
// 1. 让 obj 拥有 test
// 2. obj.test()
// 3. delete obj.test