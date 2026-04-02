
function add() {
  let num = 0
  function foo() {
    console.log(++num);
  }
  window.foo = foo
}
const res = add()
res()
res()
res()
res()



// function add() {
//   let num = 0
//   const arr = [num]
//   function foo() {
//     arr[0] = arr[0]++
//   }
//   return foo
// }