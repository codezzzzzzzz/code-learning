let obj = {
  name: '晏总',
  age: 18,
  sex: null,
  like: {
    n: '骑车'
  }
}


function deepClone(obj) {
  let clone = obj instanceof Array ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {  // key 是不是 obj显示拥有的
      // if (typeof obj[key] === 'object' && obj[key] !== null) {
      //   clone[key] = deepClone(obj[key])
      // } else {
      //   clone[key] = obj[key]
      // }

      if (obj[key] instanceof Object) {
        clone[key] = deepClone(obj[key])
      } else {
        clone[key] = obj[key]
      }
    }
  }

  return clone
}




let newObj = deepClone(obj)
obj.like.n = '打球'

console.log(newObj);
