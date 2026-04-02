const arr = [1, 2, 3, 4, 2, 1]

function unique(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    // newArr.indexOf(arr[i]) === -1
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }

  return newArr
}

console.log(unique(arr));

