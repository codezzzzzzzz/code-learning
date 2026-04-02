// Person.prototype.like = function() {
//   return `${this.name}爱泡脚`
// }
// function Person() {
//   // let obj = {}
//   // Person.call(obj)
//   // obj.__proto__ = Person.prototype

//   this.name = '梁总'
//   this.age = 18
// }
// Person.say = function () {
//   return '边弹琴边泡脚'
// }
// let p = new Person()

// console.log(p.like());



class Person { 
  constructor() {  // 构造函数
    this.name = '梁总'
    this.age = 18
  }
  like() {
    return `${this.name}泡脚`
  }
  static say() {
    return '边弹琴边泡脚'
  }
}

let p = new Person()
// console.log(p.say());
console.log(Person.say());

