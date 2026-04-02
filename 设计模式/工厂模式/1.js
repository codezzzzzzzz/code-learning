// var mrJun = {
//   name: '子俊',
//   age: 18,
//   sex: 'boy',
//   health: 100,
//   smoke: function() {
//     mrJun.health--
//   },
//   drink: function() {
//     mrJun.health++
//   }
// }
// // // 增
// // mrJun['girlFriend'] = '章若楠'
// // // 删
// // delete mrJun.girlFriend
// // // 改
// // mrJun.sex = 'girl'
// // // 查
// // // mrJun.sex

// // console.log(mrJun);

// mrJun.smoke()
// mrJun.smoke()
// mrJun.smoke()
// mrJun.drink()
// mrJun.drink()
// mrJun.drink()
// mrJun.drink()
// console.log(mrJun.health);

// 创建对象
var obj = {}   // 对象字面量 ｜ 对象直接量
// 调用自带的构造函数
var obj2 = new Object()  // 构造函数
// 调用自定义的构造函数

function Car(color) {
  this.color = color 
  this.name = 'su7'
  this.height = '1400'
  this.lang = '5000'
  this.weight = 1500
  this.health = 100
  this.run = function() {
    this.health--
  }
}
 
var car = new Car('purple')  // 实例对象
var car2 = new Car('pink')

car.name = '大劳'
car.run()
car.run()
car.run()

console.log(car.health);


