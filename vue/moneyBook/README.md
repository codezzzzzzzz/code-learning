# 移动端的项目
1. 挑一个合适的 ui 框架 （ Vant ）
2. 不同的屏幕尺寸适配   （ rem + js）
3. 数据可视化的库    （ Echarts ）


# 登录功能
1. 登录权限   
2. 前端发的登录请求，后端返回有一个 token ，前端将 token 存储在本地，下次请求时，将 token 放在请求头中，后端验证 token ，如果 token 正确，返回数据，否则返回错误信息401。


# 子父通信
- 子组件defineExpose()将数据暴露出去，父组件通过ref获取子组件实例，然后通过子组件实例获取数据。（state.xxx 被暴露时会取默认值，需要用 toRef 将它处理成双向响应）

- 子组件通过 defineEmit() 定义一个事件，并发布该事件，父组件通过 v-on 订阅该事件，然后执行回调函数。


# axios
1. 


# 路由守卫
 - 全局守卫  beforeEach， beforeResolve， afterEach   每当路由发生变化时，都会触发
 - 组件内守卫

 - beforeEach((to, from , next) => {}) 每次路由跳转前都会拦截下来，通过判断 to.path 的值来决定要去的页面是不是需要 navbar, 最后 next() 放行


# 组件
1. 复用性
2. 独立的功能

 - 一般来说组件中不写业务逻辑，只写模板和样式