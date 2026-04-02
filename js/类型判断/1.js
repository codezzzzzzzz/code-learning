function add(x, y) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  } else {
    return Number(x) + Number(y)
  }
  
}

console.log(add('1', 2));

