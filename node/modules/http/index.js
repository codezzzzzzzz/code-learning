// // const http = require('http')
// // 创建 HTTP Server
// const server = http.createServer((req, res) => {
//   res.end('Hello, world')
// })
// // 监听端口
// server.listen(3000, () => {
//   console.log('listening on port 3000');
// })


const https = require('https')
const fs = require('fs')

https.get('https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&aid=2608&uuid=7415860611224012326&spider=0', 
  (res) => {
    
    let content = ''
    res.on('data', (data) => {
      content += data
    })

    res.on('end', () => {
      // console.log(content);
      fs.writeFileSync('./juejin.json', JSON.stringify(JSON.parse(content), null, 2))
    })
    
  }
)