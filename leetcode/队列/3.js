const queue = []

queue.push('辣椒炒肉')
queue.push('辣椒炒辣椒')
queue.push('黄豆鸡脚')

while(queue.length) {
  const top = queue.shift()
  console.log(`我爱吃：${top}`);
}
