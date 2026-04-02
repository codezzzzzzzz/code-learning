const Koa = require('koa')
const app = new Koa()
const Router = require('@koa/router')
const router = new Router()
const { bodyParser } = require('@koa/bodyparser') 

// 解析请求体
app.use(bodyParser())

// 首页的接口
// 登录页面的接口
router.get('/home', (ctx, next) => {
  const { id } = ctx.query  // get 请求
  
  ctx.body = {
    code: 200,
    msg: 'success',
    data: {
      name: '张三',
      age: 20,
      id
    }
  }
})

router.post('/login', (ctx) => {
  console.log(ctx.request.body);
  ctx.body = {
    code: 200,
    msg:'登录成功',
    user: ctx.request.body.username
  }
})


// 生效路由
app.use(router.routes())

app.listen(3000, () => {
  console.log('服务启动成功')
})