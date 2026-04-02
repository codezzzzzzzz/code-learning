// 153 = 1^3 + 5^3 + 3^3
// 370 = 3^3 + 7^3 + 0^3
// 1634 = 1^4 + 6^4 + 3^4 + 4^4


const isTrue = (num) => {
  const n = num.toString().length
  const str = num.toString()
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += str[i] ** n
  }
  return sum === num
}


const getNum = (n) => {
  let min = 10 ** (n - 1), max = 10 ** n - 1
  if (n === 1) {
    min = 0
  }

  for (let i = min; i <= max; i++) {
    if (isTrue(i)) {
      console.log(i);
    }
  }
}

getNum(4)