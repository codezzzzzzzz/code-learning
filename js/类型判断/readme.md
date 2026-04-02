# 原始类型
string
number
boolean
undefined
null
symbol
bigint
# 引用类型
object
array
function
Date


# 类型判断
1. typeof  可以准确的判断除了 null 之外的所有原始类型，不能判断引用类型(除了 function)

2. instanceof 通过原型链来判断类型相等，只能判断引用类型（原始类型没有隐式原型）

3. Object.prototype.toString.call(x) 借助Object原型上的toString方法在执行过程中会读取 x 的内部属性[[calss]]这一机制

4. Array.isArray()  




# Object.prototype.toString()
1. 如果 this 值为 undefined，则返回 “[object Undefined]”。
2. 如果 this 值为 null，则返回 “[object Null]”。
3. 设 O 为调用 ToObject 的结果，将 this 值作为参数传递 
ToObject(this)
4. 设 class 为 O 的 [[Class]] 内部属性的值。 // 得到了 O 的类型
5. 返回由“[object ”、class 和 “]” 三块拼接的结果。


# 包装类
1. 原始类型不能拥有属性和方法，属性和方法只能是引用类型的
2. 访问对象上不存在的属性会得到 undefined