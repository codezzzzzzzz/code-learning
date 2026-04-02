const str = 'var a = 1'

function foo(s) {
  eval(s)  // var a = 1   将不属于这里的代码直接写入到该位置
  let b = 2
  console.log(a, b);
}

foo(str)