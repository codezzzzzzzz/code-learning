// 5!

// function jc(n) {
//   let num = n
//   for (let i = n - 1; i > 0; i--) {
//     num *= i
//   }
//   return num
// }
// console.log(jc(5));
 // 120


function jc(n) {
  if (n == 1) {
    return 1
  }
  return n * jc(n - 1)
}
jc(5000) 

// jc(5) => 5 * jc(4)
// jc(4) => 4 * jc(3)
// jc(3) => 3 * jc(2)
// jc(2) => 2 * jc(1)
// jc(1) === 1
// jc(n) === n * jc(n - 1)
