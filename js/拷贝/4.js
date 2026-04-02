
// let arr2 = [3, 4]

// let arr3 = arr.concat(arr2)

// console.log(arr2);


let arr = [1, 2, {n: 3}]

let newArr = arr.slice()         //[...arr]    // [].concat(arr)

arr[2].n = 30

console.log(newArr);
