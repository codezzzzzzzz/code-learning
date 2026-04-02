# 前端项目的准备工作
1. 引入合适的 UI 框架
2. 处理默认的样式
3. 适配不同尺寸的屏幕 （%）
4. css 的预处理器 （less, sass, stylus）

5. slot 插槽
  - 定义一个子组件，希望该子组件只做一个外层容器，子组件中间还可以放上 dom 元素，那么就要在该子组件中放上 slot 插槽

  1. 匿名插槽
  2. 具名插槽



# 后端
1. 初始化项目 （npm init）
2. 安装 koa 框架 （npm i koa）
3. 安装 koa-router 框架 （npm i koa-router）
  定义路由，封装了路由的使用
4. 定义MySQL 的配置文件
5. 封装数据库的连接
6. 封装 xxx 接口要执行的数据库操作的函数

7. koa 默认是不支持 post 请求的，需要安装 @koa/bodyparser 框架 （npm i @koa/bodyparser）
  解析 post 请求的请求体数据


# 跨域
- 浏览器的同源策略
  1. 协议相同
  2. 域名相同
  3. 端口相同

http://  localhost  :3000   /article/getNewsArticleList
  协议      域名      端口号        路径

 - 跨域是浏览器不接受后端的响应数据




# 登录问题
1. 纯前端判断，判断本地存储中是否有 token  （这种方案是不严谨的）
2. 后端判断，判断 token 是否有效
3. 前后端都判断 （用户没有登录，且没有耍小聪明的情况下， 可以少发一个请求）



# get VS post
1. get 请求的参数是拼接在 url 后面的, 而 post 请求的参数是放在请求体中的
2. 浏览器对 get 请求的参数的长度有限制，而 post 请求的参数的长度没有限制


# 防止 XSS 攻击
const { JSDOM } = require('jsdom');
const DOMPurify = require('dompurify');

将用户提交的内容进行过滤