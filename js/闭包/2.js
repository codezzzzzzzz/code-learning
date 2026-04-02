// function bar() {
//   console.log(myname);
// }
// function foo() {
//   var myname = '管总'
//   bar()
//   console.log(myname);
// }
// var myname = '阿炜'
// foo()



let count = 1
function main() {
  let count = 2
  function bar () {
    let count = 3
    function foo () {
      let count = 4
    }
    foo()
  }
  bar()
}
main()

// foo => bar  => main => 全局