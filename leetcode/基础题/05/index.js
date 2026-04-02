// 分解质因数
const getPrimeFactors = (num) => {
  let res = []
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      num = num / i
      res.push(i)
    }
  }
  if (num !== 1) {
    res.push(num)
  }
  return res
}

console.log(getPrimeFactors(660));
  // [2, 2, 3, 5, 11]