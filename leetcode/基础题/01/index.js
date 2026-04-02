let lines = ['192.168.1.1', '192.168.2.1', '192.168.1.1']

// {
//  '192.168.1.1': 2,
//  '192.168.2.1': 1
// }

const highets = (arr) => {
  const map = new Map()
  let max = 0, res = ''

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i]
    if (map.has(item)) {
      map.set(item, map.get(item) + 1)
      if (map.get(item) > max) {
        max = map.get(item)
        res = item
      }
    } else {
      map.set(item, 1)
    }
  }

  return res
  
  // let max = 0, res = ''
  // for (let [key] of map) {
  //   if (map.get(key) > max) {
  //     max = map.get(key)
  //     res = key
  //   }
  // }
  // return res
}

console.log(highets(lines));
