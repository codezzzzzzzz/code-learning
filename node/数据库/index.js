const http = require('http');
const mysql = require('mysql2');

const server = http.createServer((req, res) => {
  if (req.url === '/users') {
    // 链接数据库，并将数据库中的数据读取到返回给前端
    // 创建一个数据库连接
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'demo',
      password: '12345678'
    });
    // 执行查询并返回结果
    connection.query(
      'SELECT * FROM users',
      function (err, results, fields) {
        console.log(results); // 结果集
      }
    );
  }
  res.end('hello world')
})

server.listen(3000, () => {
  console.log('Server running on port 3000');
})