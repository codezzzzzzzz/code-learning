let arr = [1, 2, 3, 4], arr2 = [2, 3, 4, 5, 6]

const merge = (arr1, arr2) => {
  let res = []
  let i = 0, j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }

  if (i < arr1.length) {
    res.push(...arr1.slice(i))
  }
  if (j < arr2.length) {
    res.push(...arr2.slice(j))
  } 
  return res
}


console.log(merge(arr, arr2));
