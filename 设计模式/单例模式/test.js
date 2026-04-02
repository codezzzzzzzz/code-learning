
Foo.prototype.b = function() {
  console.log(this, 'b');
}
function Foo() {
  this.name = 'Foo';
}
Foo.a = function() {
  console.log(this, 'a');
}

const f = new Foo();
f.b()
Foo.a()
