Object.prototype.b = 2

let obj = {
  a: 1
}

console.log(obj.hasOwnProperty('b'));


// obj.b = 2
// let c = 'hello'
// obj['c'] = 'world'
// console.log(obj);

// for (let key in obj) {
//   console.log(key);
// }
[
  {
    id: 1,
    name: '1'
  },
  {
    id: 2,
    name: '2',
    parent_id: 1
  },
  {
    id: 3,
    name: '3',
    parent_id: 2
  }
]

[
  {
    id: 1,
    name: '1',
    children: [
      {
        id: 2,
        name: '2',
        children: [
          {
            id: 3,
            name: '3',
            parent_id: 2
          }
        ]
      },
    ]
  }
]