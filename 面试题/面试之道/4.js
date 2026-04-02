// // var a = 1
// // function bar() {
// //   var a = 2;
// //   function foo() {
// //     console.log(this.a);
// //   }
// //   return foo;
// // }
// // const baz = bar()
// // baz()




// var a = 1;
// let obj = {
//   a: 2,
//   fn: foo
// }
// let obj2 = {
//   a: 3,
//   fm: obj
// }
// function foo() {
//   console.log(this.a);
// }
// obj2.fm.fn()


let obj = {
  a: 1
}
function foo(x, y) {    // foo.__proto__ === Function.prototype
  console.log(this.a, x + y);
  return 'hello'
}
// const bar = foo.bind(obj, 5, 3, 2)
// const r = new bar(4)
// console.log(r);

// foo(2, 5)
// const res = foo.call(obj, 2, 5)
// console.log(res);
// foo.apply(obj, [2, 5])
// const bar = foo.bind(obj, 5, 3, 4)
// const r = bar(2)
// console.log(r);

Function.prototype.mycall = function (context, ...args) {
  if (typeof(this) !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  const key = Symbol('fn')
  context[key] = this
  const res = context[key](...args)
  delete context[key]
  return res
}

Function.prototype.myapply = function (context, args) {
  if (typeof(this) !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  const key = Symbol('fn')
  context[key] = this
  const res = context[key](...args)
  delete context[key]
  return res
}

Function.prototype.mybind = function (context, ...args) {
  if (typeof(this) !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  const self = this
  return function Fn(...arg) {  
    if (this.__proto__ === Fn.prototype) { // 被 new 调用 返回 foo 的实例
      return new self(...args, ...arg)
    } else {
      return self.apply(context, [...args,...arg])
    }
  }
}


const bar = foo.mybind(obj, 2, 5)
const res = bar(3)  // new foo()
console.log(res);




// function test() {
//   this   // this.__proto__ === test.prototype
// }

// new test()
// test()