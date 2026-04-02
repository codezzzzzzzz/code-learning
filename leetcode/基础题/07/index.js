const arr = [-2, 2, -3, 4, -1, 2, 1, -5, 3]

const getMaxSubArray = (arr) => {
  let max = arr[0]  // 2
  let newMax = arr[0]  // -1

  for (let i = 1; i < arr.length; i++) {
    newMax = Math.max(newMax + arr[i], arr[i])
    max = Math.max(max, newMax)
  }
  return max
}