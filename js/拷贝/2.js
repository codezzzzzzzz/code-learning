// let obj = {
//   a: 1
// }

// let newObj = Object.create(obj)
// obj.a = 2

// console.log(newObj.a);

// obj.create()


Foo.prototype.run = function() {
  console.log('running');
}
function Foo() {

}
Foo.say = function() {
  console.log('hello');
}

let f = new Foo();
// f.say()
Foo.say()