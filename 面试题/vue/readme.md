# 页面渲染优化
 1. html 不要嵌套过深 （减轻回流的压力）
 2. css 尽量使用精确的选择器 （减轻回流的压力）
 3. 代码压缩 （减轻请求的压力）
 4. js  (async 异步加载    defer 异步加载+延迟执行)
 5. 图片（懒加载， 预加载， 骨架屏， 压缩， 精灵图）
 6. 缓存

# 谈谈你对 vue 的理解
 1. 渐进式的单页应用框架

 2. MVVM 数据驱动页面 （model  view   view-model）
 3. 组件化 （可复用， 方便调试）
 4. 指令
 5. 虚拟dom  （跨端开发， 减少 dom 操作）
 6. 生态完善

# 谈谈你对spa的理解
  1. 整个项目只有一个页面
  2. 页面中的内容是动态的，以组件的形式展示，靠路由来映射匹配组件

  优点：
  1. 组件化开发，易于维护
  2. 页面切换快，体验好
  3. 前后端分离，提高开发效率
  4. 减轻服务器压力，提高性能

  缺点：
  1. 初次加载慢
  2. 不利于SEO

  - ssr

# 说说你的 vue 生命周期的理解
 - vue 组件从创建到销毁的过程，其中官方提供了一系列的钩子函数
 1. setup  ==  beforeCreate  +  created
 2. onBeforeMount  ==  beforeMount
 3. onMounted  ==  mounted
 4. onBeforeUpdate  ==  beforeUpdate
 5. onUpdated  ==  updated
 6. onBeforeUnmount  ==  beforeUnmount
 7. onUnmounted  ==  unmounted
 8. onActivated  ==  activated
 9. onDeactivated  ==  deactivated


# 说说你对双向绑定的理解
 - 是什么
  v-model 修改数据，页面会同步更新， 页面内容修改，数据也会同步更新

 - 原理  Model   View  ViewModel
 - ViewModel 
   1. Observer  监听器
   2. Compiler  解析器

 - 双向绑定的原理
  1. 变量被处理成响应式的过程中会为变量做依赖收集，当变量的值变更时，触发 setter，并执行依赖，导致视图更新
  2. 视图更新相当于用户触发了 input 事件，修改响应式变量，进而又导致setter 触发

# vue 的组件通讯
 1. 父子组件通讯   
  - 父组件用 v-bind 传递数据给子组件， 子组件用 defineProps 接收数据
  - 父组件 provide 数据， 子组件 inject 数据

 2. 子父组件通讯
  - 子组件用 defineEmits 定义事件并发布， 父组件用 v-on 订阅事件
  - 子组件通过 defineExpose 暴露数据， 父组件通过 ref 引用子组件中的数据
  - 父组件通过 v-model 绑定数据给子组件， 子组件通过defineProps接收，然后定义 'update:xxx' 事件，并直接修改父组件给过来的数据，但是一定要发布'update:xxx'事件

 3. 兄弟组件通讯
  - 在外部的 js 文件中定义响应式变量，同时引入到两个组件中，因为是响应式的，所以两个组件都可以修改这个变量，从而实现通讯
  - pinia
  
# v-if 和 v-show 的区别
 1. v-if 是动态的向 DOM 树内添加或者删除 DOM 元素， v-show 是通过 CSS 控制元素的 display 属性
 2. v-if 控制的组件会触发组件的生命周期， v-show 不会
 3. v-if 有更高的切换开销

# v-if 可以和 v-for 一起使用吗？
 - vue3中， 可以     v-if的优先级比v-for高

 - vue2中， 不可以    v-for的优先级比v-if高


# SPA 首屏加载优化
 - 首屏加载慢
  1. 单页应用需要把所有的页面代码都执行完毕，首屏才加载
  2. 加载 js 脚本
  3. 网络延时

 - 解决方案
 1. 路由懒加载
 2. ssr
 3. 骨架屏
 4. UI 框架按需加载

# data 为什么是一个函数，不能是一个对象？
 如果 data 是一个对象，那么当该组件被多处使用时，会导致数据共享， 会出现数据污染的问题， 所以 data 必须是一个函数，返回一个对象，每个组件实例都有自己的 data 对象

# 说说你对 vue 中 nextTick 的理解
 - nextTick 是一个异步函数， 它的作用是在DOM 更新完成之后执行 延迟回调

 - 应用场景
 1. 当我们修改变量之后，需要获取 DOM 的信息， 但是 DOM 还没有更新， 所以我们需要使用 nextTick 来获取 DOM 的信息
 
 - 原理
  1. 在拥有MutationObserver的浏览器中，使用MutationObserver 来监听 DOM 的变化，当 DOM 变化时， 触发回调函数
  2. 在不支持 MutationObserver 的环境中，使用 setTimeout 来模拟 MutationObserver， 当 DOM 变化时， 触发回调函数


# 说说你对 slot 的理解
 - slot 是组件中的一个占位符， 用于接受该组件标签中的内容

 1. 匿名 slot
 2. 具名 slot
 3. 作用域 slot
 4. 条件 slot
 
 - 应用场景
  1. layout 布局组件

# 为什么要使用 key？  index 做 key 有什么问题？
 - key 大大提高了 diff 的效率， 减少了不必要的渲染
 - index做 key 等同于没有做 key， 会导致性能问题

# 什么是虚拟 DOM？
用 js 对象作为树，使用对象的属性来描述节点的状态， 用这个对象来描述真实的 DOM 树， 这个对象就是虚拟 DOM。最少包含 tag， props， children 三个属性。

- 减少了真实 DOM 的操作带来页面渲染的性能开销
- 抽象了原本的渲染过程，实现了跨平台开发的能力

# 自定义指令

# 说说 diff 算法
 - 是一种对象的比较算法，效率很高。在拥有虚拟 DOM 的框架中被使用

 - 原理
  1. 比较新旧虚拟 DOM 的根节点， 如果根节点不同，直接替换整个 DOM 树
  2. 如果根节点相同，比较根节点的属性， 如果属性不同，直接修改根节点的属性
  3. 如果根节点的属性相同，比较根节点的子节点，同层级的节点进行比较，如果子节点不同，直接替换子节点以下的 DOM 树
  4. 判断是不是文本节点，如果是文本节点，直接修改文本节点的内容
  5. 采用深度优先遍历对比子节点

   - 在对比的过程中有旧节点，没有新节点，直接删除旧节点
   - 在对比的过程中有新节点，没有旧点，直接添加新节点


  - 同层级的节点进行比较：（双端队列）
   1. 设置新旧 VNode 的头尾指针
   2. 新旧头尾指针进行比较，向中间靠拢，这个过程包含 4 种情况， 分别是：
    旧头和新头比较， 旧尾和新尾比较， 旧头和新尾比较， 旧尾和新头比较


# 了解过 vue2 吗？vue3 和 vue2 的区别是什么？
 1. 速度更快：
  - 重写了虚拟 DOM 的实现，使用了 Proxy 代替 Object.defineProperty
  - 编译模版的优化，采用静态提升策略，将静态节点缓存起来，减少了编译的时间
 2. 体积更小：
  - 组合式 API，实现按需引入的能力

 3. 更易维护
  - 完全兼容vue2 的写法，还可以搭配vue3 模块使用

 4. 更接近原生
 5. 更友好的 ts 支持
  - 