// const { add, minus } = require('./utils/add.js')
// console.log(add(1, 2));


// import { formatDate, foo }  from './utils/formate.js'
// import bar  from './utils/formate.js'

import * as formate from './utils/formate.js'
console.log(formate.formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'));
console.log(formate.foo);
console.log(formate.default);



// console.log(formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'));
// console.log(foo);
// console.log(bar);
