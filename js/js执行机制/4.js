// var a = 1
// function fn(a) {
//   var a = 2
//   function a() {}
//   var b = a
//   console.log(a);
// }
// fn(3)


// function fn(a) {
//   console.log(a);  // func
//   var a = 123
//   console.log(a);  // 123
//   function a() {}
//   console.log(a);  // 123
//   var b = function () {}
//   console.log(b);  // func
//   function d() {}
//   var d = a
//   console.log(d);  // 123
// }
// fn(1)


var global = 100
function fn() {
  console.log(global);
}
fn()