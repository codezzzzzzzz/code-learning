const Koa = require('koa');
const app = new Koa();
const axios = require('axios');
const Router = require('koa-router'); // 路由
const router = new Router();
const bodyParser = require('koa-bodyparser');  // 解析请求体


// app.use(async (ctx) => { // 中间件
//   // 获取前端传过来的参数
//   // 利用 ajax 将内容交给 deepseek 模型 （已经在本地部署了）
//   // 模型返回结果
//   // 返回给前端
//   if (ctx.url === '/') {

//     const message = '你好'
//     // 当前 openai 制定的标准，行业标准
//     const data = {
//       model: 'deepseek-r1:1.5b', // 模型名称
//       messages: [
//         {
//           role: 'user', // 角色
//           content: message
//         }
//       ],
//       stream: false // 是否流式返回
//     }

//     // 跟 deepseek 模型进行通信
//     const response = await axios.post("http://localhost:11434/api/chat", data)
//     // console.log(response.data.message.content);


//     ctx.body = {
//       code: 200,
//       content: response.data.message.content
//     }
//   }

// })

app.use(async(ctx, next) => {  // 处理跨域
  ctx.set('Access-Control-Allow-Origin', '*');  // 允许所有域名访问我这个后端
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE'); // 允许的请求方法
  ctx.set('Access-Control-Allow-Headers', 'x-requested-with, accept, origin, content-type'); // 允许的请求头
  // 请求预检（http协议规定每一个 http 请求发送前都会自动发送一个预检请求）
  if (ctx.method === 'OPTIONS') {
    ctx.status = 204
    return;
  }

  await next();
})

app.use(bodyParser())


router.post('/deepseek/chat', async (ctx) => {
  console.log(ctx.request.body)
  const message = ctx.request.body.content // 前端传过来的消息
  const data = {
    model: 'deepseek-r1:1.5b', // 模型名称
    messages: [
      {
        role: 'user', // 角色
        content: message
      }
    ],
    stream: false // 是否流式返回
  }
  // 跟 deepseek 模型进行通信

  await axios.post("http://localhost:11434/api/chat", data).then(response => {
    console.log(response.data.message.content);
    ctx.body = {
      code: 200,
      content: response.data.message.content
    }
  })
  
  
})


app.use(router.routes()) // 启动路由



app.listen(3000, () => {
  console.log('server is running at port 3000');
});