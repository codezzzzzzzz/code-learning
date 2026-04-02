let obj = {
  a: 1,
  b: 2,
  c: 3
}

let res = Object.freeze(obj)
// delete res.a
// res.a = 10
res.d = 4
console.log(res);



// Object.defineProperty(obj, 'a', {
//   writable: false,
//   configurable: false,
//   enumerable: false,
// })


// for (let key in obj) {
//   console.log(key);
// }
// // delete obj.a
// console.log(obj);