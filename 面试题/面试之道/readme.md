# 类型
- 原始类型 number string boolean null undefined symbol bigint
- 引用类型 object function array Date Map Set RegExp

1.toString()

0.111111111 + 0.2 = 

'7654321425367586545423' +  '0000000065431098765432'

# typeof vs instanceof

# Object.prototype.toString.call(1)  // [object Number] ?

1. 对象上的 toString()   返回 '[object x类型]'格式的字符串
2. 数组上的 toString()   返回 数组元素以逗号拼接的字符串
3. 其他类型的 toString()  返回 字符串字面量


# 类型转换
- 显示转换   Number('1')
- 隐式转换   + - * / ==  !=  !  > < >= <=  if while 

1. 原始类型 -》 原始类型
2. 引用类型 -》 原始类型   
  1. 转字符串 :  X + ''
  2. 转数字
  3. 转布尔值: if while  !

- {} ==> 数字      ||     {} ==> 字符串    ToString({})
  1. ToNumber({})  // ToNumber只能处理原始类型
  2. 当ToNumber遇到引用类型内部执行 ToPrimitive({}， number)  

- ToPrimitive({}， number)  
 1. 先调用valueOf()  如果返回原始类型  则结束
 2. 调用toString()  如果返回原始类型  则结束
 3. 抛出错误

- ToPrimitive({}， string) 
 1. 先调用toString()  如果返回原始类型  则结束
 2. 调用valueOf()  如果返回原始类型  则结束
 3. 抛出错误


# this
 - 默认绑定：函数被独立调用, this指向window
 - 隐式绑定：函数被某个对象调用, this指向该对象
 - 隐士丢失：函数被一连串的对象调用，this指向最进调用的对象
 - 显示绑定：call apply bind 
   - call apply bind 区别：
      call， bind 接受参数是零散的
      apply 接受参数是数组
      bind 会返回一个新的函数 新函数也可以接受参数
          1. 当新的函数被 new 调用时，返回的是 调用 bind的那个函数的实力对象


# == vs ===
 1. == 会进行隐式转换
 2. === 不会进行隐式转换

# 闭包
根据词法作用的规则，内部函数总是可以访问其外部函数中的变量的。
在函数执行完毕后，它的执行上下文对象要被销毁

当函数 A 内部声明了一个函数 B，函数 B 被拿到 A 的外部调用，为了同时满足以上两个规则，函数 A 的执行执行上下文被销毁后会遗留下来一个对象空间，用于存放函数 B 有权访问的所有变量。这个对象空间被称为闭包。


# 拷贝
  - 浅拷贝：拷贝得到的新对象会受原对象的影响 
    - 1. Object.assign()
    - 2. Object.create()
    - 3. 展开运算符 ...
    - 4. 数组的 slice()  concat()

  - 深拷贝：拷贝得到的新对象不会受原对象的影响
   1. JSON.parse(JSON.stringify(obj))
   2. 递归拷贝
   3. structuredClone()
   4. new MessageChannel()


# 原型
  1. 显示原型  prototype
  2. 隐式原型  __proto__

  - 原型的作用：
    让所有的实例对象都有一个公有的属性和方法

  - 原型链：
    因为对象都有自己的__proto__,v8在查找属性和方法时，会先去对象的显示属性中查找，找不到就会去对象的__proto__中查找，还找不到就会顺着__proto__一直往上查找，直到找到null为止。这种查找的关系链条就叫做原型链。

    Object.create(obj)  {}.__proto__ === obj

    Object.create(null)   // 创建一个没有原型的对象
    

  - new的实现：
   1. 创建一个新对象
   2. 新对象的__proto__指向构造函数的prototype
   3. 构造函数内部的this指向新对象
   4. 执行构造函数内部的代码
   5. 当构造函数中有返回值且返回值的类型是引用类型时，new 会返回构造函数的执行结果， 否则才返回新对象

# var let const 区别
  1. var 没有块级作用域  let const + {} 有块级作用域
  2. var 会声明提升  let const 不会声明提升
  3. var 可以重复声明  let const 不能重复声明
  4. const 声明的变量不能重新赋值， 也不能声明一个不赋值的变量
  5. var 声明的全局变量会挂载到window上， let const 不会

  - 暂时性死区：
    当使用 let 或 const 声明变量形成了块级作用域时，在变量声明前访问该变量会报错，即使块级作用域外也声明了相同的变量，也无法访问，这就是暂时性死区。


# 继承
  - 让子类能访问到父类的属性和方法
  1. 原型链继承: 子类无法给父类传参
  2. 借用构造函数继承: 无法继承父类的原型
  3. 组合继承：父类构造函数执行了两次

  4. 原型式继承： 
  5. 寄生组合继承：

  6. class继承:  extends + super()


# proxy
 - es6 新增的一个特性, 用来代理对象，代理对象上的读取、设置、函数调用等13种行为。vue3 主要依靠proxy实现响应式。


# map, filter, reduce, forEach
map: 遍历数组，将数组中的每一项都执行一次回调函数，返回一个新的数组filter: 遍历数组，将数组中满足条件的那些项保留到新数组，并返回新数组reduce: 接受两个参数，第一个是回调，第二个是回调中的第一个参数，遍历数组，将每次返回的值作为下一次回调的第一个参数

forEach: 无法使用传统的控制语句（break， return）来终止循环


# 异步
 - js 默认是单线程的

 - 进程：多个程序同时执行的过程
 - 线程：一个程序的执行过程（一个任务的最小单元）


 1. 回调函数： 回调地狱，代码可读性差，维护困难
 2. promise

   - then 方法的返回值是一个新的 promise，状态为 pending，then 的 pending 状态会根据上一个 promise 状态的修改而修改。

 3. generator 
    函数内部使用 yield 关键字，函数会返回一个迭代器对象，每次调用 next 方法会返回一个对象，对象中有 value 和 done 属性，value 是 yield 后面的值，done 是一个布尔值，当 done 为 true 时，迭代器已经遍历完毕。

 4. async/await


  - then原理： 
  1. 接受两个参数，第一个是成功的回调，第二个是失败的回调
  2. 返回一个新的 promise
  3. 当 then 执行到的时刻，then 前面的 promise 状态已经变更为 fulfilled 或 rejected， then 中的回调函数由then 自己执行
  4. 当 then 执行到的时刻，then 前面的 promise 状态为 pending，then 中的回调函数会先被存放，等待 promise 状态变更为 fulfilled 或 rejected 时再由 resolve 或 reject函数执行


# Event Loop
  - 线程之间可以同时工作，除了 js 线程和 渲染线程，因为 js 可以修改 dom，可能会出现渲染冲突

  - 同步代码
  
  - 异步代码
    - 宏任务队列：script, setTimeout, setInterval, setImmediate, requestAnimationFrame, I/O, UI rendering
    - 微任务队列：promise.then, MutationObserver, process.nextTick

  1. 执行同步代码 （也叫宏任务）
  2. 执行微任务队列中的任务
  3. 有必要的话，执行渲染
  4. 执行宏任务队列中的任务

  以上4步循环执行


  - async/await
    - async 函数返回的是一个 promise
    - await 后面接的代码作为同步代码立即执行
    - await 会将后续的代码挤入微任务队列中
    - await 后面接的 promise 状态无法变更为 fulfilled 或 rejected的话，会发生阻塞(死锁)，代码的执行会一直停留在该 await上，出现这种情况时，await 会主动让出主线程，让主线程去执行其他可行的任务

# 浏览器基础考点
  - 事件机制
    1. 事件从 window 上往目标处传播   （捕获阶段）
    2. 事件传播到目标处后，会触发事件处理函数
    3. 事件从目标处往 window 上传播  （冒泡阶段）

  - 事件委托

  - 跨域

  - 存储
    https://www.baidu.com/    
    https://www.abc.baidu.com/
  
  - 缓存
    1. 强缓存
      - Expires  绝对时间
      - Cache-Control  相对时间
    2. 协商缓存
      - Last-Modified  上次修改时间
      - If-Modified-Since  上次修改时间
      - ETag  资源的唯一标识

  - 渲染过程
   1. 解析html得到dom树
   2. 解析css得到css规则树
   3. 将dom树和css规则树合并成render树（只包含可见的节点）
   4. 根据render树计算每个节点的位置  （回流）
   5. 将每个节点绘制到屏幕上  （重绘）

    - 回流: 页面上有元素的几何属性发生变化

    - 重绘：页面上有元素的外观属性发生变化
      
    
    - 浏览器的优化
     浏览器维护了一个队列，当页面上出现需要回流的操作时，会将该操作放入队列中，当队列中的操作达到一定数量时，会将队列中的操作一次性执行，这就是浏览器的优化。

     offsetTop, offsetLeft, offsetWidth, offsetHeight, clientWidth, clientHeight, scrollTop, scrollLeft, scrollWidth, scrollHeight, getComputedStyle() 这些属性会强制刷新队列，导致回流
    

    - 减少回流的操作
      1. 不要一条一条地修改 DOM 的样式。与其这样，还不如预先定义好 css 的 class，然后修改 DOM 的 className
      2. 将需要大量回流的元素，脱离文档流，回流完毕后再重新插入文档
      3. 使用文档碎片
      4. 使用dom 克隆


# 设计模式
  - 发布订阅模式