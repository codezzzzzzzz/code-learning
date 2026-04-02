// let a = 1
// let b = '2'
// let c = true
// let d = undefined
// let e = null
// let f = Symbol(1)
// let g = 312312312n

// let a = {}
// let b = []
// let c = function() {}
// let d = /\d/
// let e = new Date()

// // console.log(typeof(c));


// let s = 'hello'
// let arr = []
// console.log(arr instanceof Object);


function myInstanceof(l, r) {
  let lProto = l.__proto__
  let rProto = r.prototype
  while(lProto !== null) {
    if(lProto === rProto) {
      return true
    } else {
      lProto = lProto.__proto__
    }
  }
  return false
}

console.log(myInstanceof(123, Number));


// let a = {}
// let b = []
// let c = function() {}
// let d = /\d/
// let e = new Date()

// // console.log(Object.prototype.toString.call(1));


// Function.prototype.myCall = function(context) {
//   context.foo = this  // fn
//   context.foo()
//   delete context.foo
// }


// let obj = {
//   a: 1,
//   // foo: fn
// }
// // obj.foo()
// function fn() {
//   console.log(this.a);
// }
// fn.myCall(obj)