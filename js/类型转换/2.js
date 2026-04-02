// let a = []
// if (a) {
//   console.log('hello');
// }

let a = {}
console.log(String(a));  // ToString(a)  // ToPrimitive(a, String)
console.log(a.toString());



Number({})  // ToNumber({})  // ToPrimitive({}, Number)

