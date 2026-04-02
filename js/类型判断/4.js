console.log(new String('hello') instanceof String);
console.log('hello' instanceof String);








let num = 123  // let num = new Number(123)
num.a = 1  // 真的往 num 上添加了key 为 a，值为 1
// 不对！用户想要的是字面量，必须满足用户要求 
// delete num.a
// console.log(num.a);  // undefined  为什么不报错？

// console.log(num);  // [[PrimitiveValue]]









let str = 'hello'  // let str = new String('hello')
str.len = 2
// console.log(str.length);

// delete str.len
// console.log(str.len);



let ss = new String('hello')
ss.len = 2
console.log(ss.len);
