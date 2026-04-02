let person = {
  name: '阿炜',
  age: 18,
  like: {
    n: 'running'
  }
}

function shallow(obj) {
  let res = {}
  for (let key in obj) {
    // key 是不是 obj显示就有的属性
    if (obj.hasOwnProperty(key)) {
      res[key] = obj[key]
    }
  }
  return res
}

console.log(shallow(person));


// function shallow(obj) {
//   let res = {}
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       res[key] = obj[key]
//     }
//   }
// }