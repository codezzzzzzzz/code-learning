const arr = [1, 2, 3, 4, 2, 1]

function unique(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    // 新数组是否已经具有该值
    for (var j = 0; j < newArr.length; j++) {
      if (arr[i] === newArr[j]) {
        break
      }
    }

    if (j === newArr.length) {
      newArr.push(arr[i])
    }
  }

  return newArr
}

console.log(unique(arr));

