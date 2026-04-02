// 123     321
// 900     9

const foo = (num) => {
  let str = num.toString().split('').reverse().join('')
  console.log(str);
  
  return Number(str)
}

console.log(foo(100.05));
