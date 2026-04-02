// // var isPalindrome = function(x) {
// //   let str = x.toString();  // '12321'
// //   let arr = str.split('') // ['1', '2', '3', '2', '1']
// //   let newArr = arr.reverse();
// //   let newStr = newArr.join('');  // '12321'
// //   return str === newStr;
// // };


// var isPalindrome = function(x) {
//   let res = 0  // 1   12321
//   let current = x
//   while(current) {
//     let last = current % 10
//     current = Math.floor(current / 10)
//     res = res * 10 + last
//   }

//   return res === x
// }

// console.log(isPalindrome(123211));


// // 12321 % 10 = 1
// // 1232 % 10 = 2
// // 123 % 10 = 3

let str = 'yesey'
var isPalindrome = function(str) {
  let i = 0
  let j = str.length - 1

  while(i < j) {
    if (str[i] === str[j]) {
      i++   
      j--
    } else {
      return false
    }
  }

  return true
};
