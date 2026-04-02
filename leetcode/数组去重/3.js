const arr = [1, 2, 5, 3, 4, 2, 1]

// arr.sort((a, b) => {
//   return b - a
// })
// console.log(arr);


// const arr2 = arr.filter((item, index, arr) => {
//   return item <= 2
// })
// console.log(arr2);

function unique(arr) {
  // let newArr = [...arr]
  // // [1, 1, 2, 2, 3, 4]
  // return newArr.sort().filter((item, index, array) => {
  //   return index === 0  || item !== array[index - 1]
  // })

  return [...arr].sort().filter((item, index, array) => !index || item !== array[index - 1])
}

console.log(unique(arr));
