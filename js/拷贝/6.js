let obj = {
  name: '钟总',
  age: 18,
  like: {
    n: '金铲铲'
  },
  a: true,
  b: null,
  c: undefined,
  d: Infinity,
  e: -Infinity,
  f: NaN,
  g: Symbol(1),
  i: function() {}
}
obj.c = obj.like
obj.like.n = obj.c


let res = JSON.parse(JSON.stringify(obj))
obj.like.n = '王者'

console.log(res);


