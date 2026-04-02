const str = 'abac'

// const isPalindrome = (str) => {
//   return str.split('').reverse().join('') === str
// }

const isPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}


const validPalindrome = (s) => {
  let left = 0, right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      // 删除左边 或者 删除右边 判断是否是回文
      // left + 1, right   ||   left, right - 1
      return (isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1))
    }
    left++
    right--
  }
  return true
}
