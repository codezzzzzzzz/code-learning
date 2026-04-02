const fs = require('fs');

// 异步
// fs.readFile('./temp.html', 'utf-8', (err, data) => {
//   if (!err) {
//     console.log(data);
//   }
// })

// let html = ''
// fs.promises.readFile('./temp.html', 'utf-8').then((res) => {
//   html = res;
// })
// console.log(html);


let html = ''
html = fs.readFileSync('./temp.html', 'utf-8')
console.log(html);
