let obj = {
  a: 1,
  b: {
    n: 2
  }
}

// let obj2 = {
//   b: 2
// }

let obj3 = Object.assign({}, obj)
obj.a = 10
obj.b.n = 20

console.log(obj3);

