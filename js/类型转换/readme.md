# == VS  ===
== 会发生隐式类型转换，所以只会判断值是否相等
=== 不会发生隐式类型转换，意味着就判断值和类型是否相等

# 原始类型之间的转换
1. 转布尔
2. 转数字
3. 转字符串

# 对象转原始值
1. 转字符串 String(obj) || Object.prototype.toString(obj)
  ToString({}) 
  ToPrimitive({}, String)

- {}.toString 返回由 '[object' 和 class 和 ']' 组成的字符串
- [].toString 返回由数组中元素以逗号拼接的字符串
- xx.toString 直接返回 xx 的字符串字面量

2. 转数字 : Number(obj)
  ToNumber({}) 
  ToPrimitive({}, Number)


3. 转布尔： true


# ToPrimitive 
1. ToPrimitive(obj, String)
 - 如果 obj 是原始类型，直接返回
 - 否则，调用 toString()，如果得到原始类型，直接返回
 - 否则，调用 valueOf()，如果得到原始类型，直接返回
 - 否则，报错


2. ToPrimitive(obj, Number)
 - 如果 obj 是原始类型，直接返回
 - 否则，调用 valueOf()，如果得到原始类型，直接返回
 - 否则，调用 toString()，如果得到原始类型，直接返回
 - 否则，报错


# 隐式类型装换的场景
1. 四则运算 + - * / % 
2. 判断语句 if while  ==  >  <  >=  <=   !=


# 一元运算符 +

# 二元运算符 +
 val1 + val2

lprim = ToPrimitive(val1)
rprim = ToPrimitive(val2)

- 如果 lprim 或者 rprim 是字符串，另一个值直接被 ToString()
- 否则，返回对 ToNumber（lprim） 和 ToNumber（rprim） 应用加法运算的结果

# ==

https://es5.github.io/#x11.9.3





