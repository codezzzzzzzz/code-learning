// // // // let arr = [1, 2, 3, 4, 1, 2]
// // // // let arr2 = [
// // // //   {id: 1, name: 'zs', age:{n: 2}},
// // // //   {id: 2, name: 'ls'},
// // // //   {id: 3, name: 'ww'},
// // // //   {id: 1, name: 'zs', age:{n: 2}},
// // // // ]

// // // // let set = new Set(arr2)   // 特殊的数组    里面的值都是唯一的

// // // // // console.log([...set])



// // // // let obj = {
// // // //   a: 1,
// // // //   b: 2,
// // // //   c: 3,
// // // //   d: 4,
// // // // }
// // // // // let h = 'hello'
// // // // // obj[h] = 123

// // // // let m = new Map()
// // // // m.set('a', 1)
// // // // m.set(2, 2)
// // // // m.set([], 1)



// // // // console.log(m)




// // // let reg = new RegExp('abc', 'g')

// // // console.log(reg.test('abcdefg'))

// // let a = 1  // new Number(1)
// // // a.b = 2   // new Number(1).b = 2
// // // delete a.b
// // a.gotoString = function () {
// //   return '1'
// // }
// // console.log(a.toString());  // a.__proto__.toString()


// const obj = {
//   age: 18,
//   like: {
//     n: 'food'
//   }
// }
// function test(o) {
//   o.age = 20
//   o = {
//     age: 22,
//     like: {
//       n: 'movie'
//     }
//   }
//   return o
// }
// const obj2 = test(obj)

// console.log(obj);  // {age: 20, like: {n: 'food'}}
// console.log(obj2); // {age: 22, like: {n: 'movie'}}


