// 数据库的配置，node 想要链接 mysql数据库，
// 需要知道数据库的账号，密码 和数据库的名字，还有数据库的端口号

const dataBase = {
  DATABASE: 'blog',
  USERNAME: 'root',
  PASSWORD: '12345678',
  PORT: '3306',
  HOST: 'localhost'
}

module.exports = dataBase