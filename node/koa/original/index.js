const http = require('http');

http.createServer((req, res) => {
  // console.log(req.headers);
  // res.end('后端返回数据 hello world')
  if (req.url === '/home') {
    // 做数据库的链接
    // 执行 sql 语句
    res.end('首页的数据')
  }
  
}).listen(3000, () => {
  console.log('server is running');
})