const Koa = require('koa')
const fs = require('fs')

const app = new Koa()

const main = (ctx) => { 
  // console.log(ctx.url);
  // ctx.body = 'hello world'

  // ctx.response.type = 'html'
  // ctx.body = '<h2>Hello</h2>'

  if (ctx.url === '/home') {
    ctx.response.type = 'html'
    ctx.body = fs.createReadStream('./assets/template.html')
  
  }

}

app.use(main)

app.listen(3000, () => {
  console.log('服务启动成功')
})