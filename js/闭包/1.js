// // let a = 1
// // const b = 2
// // a = 3
// // b = 4

// function varTest() {
//   var x = 1
//   if (true) {
//     let x = 2
//     console.log(x);
//   }
//   console.log(x);
// }
// varTest()


function foo() {
  var a = 1
  let b = 2
  {
    let b = 3
    var c = 4
    let d = 5
    console.log(a);
    console.log(b);
  }
  console.log(b);
  console.log(c);
  console.log(d);
}
foo()