// const qing = {
//   name: '庆玲',
//   age: 18,
//   career: 'coder'
// }

// const feng = {
//   name: '凤',
//   age: 18,
//   career: 'AIGC'
// }


// 开放封闭

function User(name, age, career) {
  this.name = name;
  this.age = age;
  this.career = career;
}

const user = new User(name, age, career)