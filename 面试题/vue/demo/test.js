function Component() {
  this.data = this.data()
}

Component.prototype.data = function() {
  return {
    count: 1
  }
}


const comA = new Component()   // data: { count: 1 }
const comB = new Component()   // data: { count: 1 }

comA.data.count = 2
console.log(comB.data.count) // 2