// let obj = {
//   name: 'John',
//   name: 'Tom',
//   age: 25,
//   city: 'New York'
// }

// console.log(obj.name);

// let obj = {}
// console.log(Object.keys(obj));


let arr = [1, 2, 3, 1, 2]
function unique(arr) {
  // let obj = {
  //   1: true
  // }
  // for (let i = 0; i < arr.length; i++) {
  //   if (!obj[arr[i]]) {
  //     obj[arr[i]] = true
  //   }
  // }
  // return Object.keys(obj).map(Number)
  
  let obj = {}
  return arr.filter((item, index, array) => {
    return obj[item] ? false : (obj[item] = true)
  })
}

console.log(unique(arr));
