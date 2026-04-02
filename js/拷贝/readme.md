# 拷贝
- 只针对引用类型
- 基于原对象，拷贝得到一个新对象

1. 浅拷贝：新对象受原对象的影响(只拷贝了对象的第一层，而里面的子对象拷贝的还是引用地址)
  - Object.create(x)
  - Object.assign({}, obj)
  - [].concat(arr)
  - 数组解构
  - arr.slice()
  - arr.toReversed().reverse()

  - 实现原理：



2. 深拷贝：新对象不受原对象的影响
 - JSON.parse(JSON.stringify(obj))
  1. 不能识别 bigint
  2. 不能拷贝 undefined  Symbol  function  NaN  Infinity 
  3. 无法处理循环引用

 - structuredClone()
 