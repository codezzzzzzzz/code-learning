// // 提升后
// var myname = undefined
// function showName() {
//   console.log('函数showName被执行');
// }


// // 执行
// showName()
// console.log(myname);
// myname = '琪琪'



var a = 2
function add(b, c) {
  return b + c
}
function addAll(b, c) {
  var d = 10
  var result = add(b, c)
  return a + result + d
}
addAll(3, 6)
