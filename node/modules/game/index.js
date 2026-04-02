// 读取用户输入的内容
// 计算机生成一个随机的内容
// 比较结果并输出

// const playerAction = process.argv[process.argv.length - 1];
// const result = game(playerAction)
// console.log(result);


const { game } = require('./lib.js')

let count = 0
process.stdin.on('data', function(e) {
  const playerAction = e.toString().trim();
  const result = game(playerAction)
  if (result === 1) {
    count++
  }
  if (count === 3) {
    console.log('你太厉害了，我不玩了');
    process.exit();  // 结束进程
  }

})



