// console.log({} instanceof Object);
// console.log([] instanceof Array);
// console.log(new Date() instanceof Date);
// console.log(function(){} instanceof Function);

// console.log(new Date() instanceof Object);



// console.log('hello' instanceof String);
// console.log(123 instanceof Number);
// console.log(true instanceof Boolean);


function Car() {
  this.run = 'runing'
}

Bus.prototype = new Car();
function Bus() {
  this.name = 'BYD'
}

let bus = new Bus();


// console.log(bus instanceof Object);
// bus.__proto__.__proto__.__proto__ === Object.prototype


// console.log(bus instanceof Car);
// bus.__proto__.__proto__ === Car.prototype


// console.log(bus instanceof Bus);  
// bus.__proto__ === Bus.prototype