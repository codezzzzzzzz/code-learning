// let s = new Set([1, 2, 3, 1])  // 成员是唯一的
// // s.add(1)
// // s.add(2)
// // s.add(3)
// // s.add(1)
// console.log([...s]);

let arr = [1, 2, 3, 1, 2]
function unique(arr) {
  return [...new Set(arr)]
}

console.log(unique(arr));
