function myinstanceof(L, R) {
  while (L !== null) {
    L = L.__proto__
    if (L === R.prototype) {
      return true
    }
  }
  return false
}

console.log(myinstanceof([], Object)); // true