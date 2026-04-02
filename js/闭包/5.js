function fn() {
  var arr = []
  for (var i = 0; i < 5; i++) {

    function foo(n) {
      arr.push(function() {
        console.log(n)
      })
    }
    foo(i)
    
  }
  return arr
}






var funcs = fn()
for (var j = 0; j < 5; j++) {
  funcs[j]()  // 数组中的 5 个函数依次执行
}



// (function() {
// })()