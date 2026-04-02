# Object.defineProperty  和 Proxy 的区别

1. Object.defineProperty 只能劫持对象拥有的属性，而 Proxy 可以代理对象新增属性的操作
2. 在vue 中， Object.defineProperty 默认递归劫持，Proxy 按需递归代理
3. Object.defineProperty 无法劫持数组上的方法，Proxy 可以代理数组
4. Object.defineProperty 可以冻结对象的属性


