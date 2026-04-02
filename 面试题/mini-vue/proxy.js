let obj = {
  a: 1
}

// obj.a = 2

function updateView() {
  console.log('视图更新')
}


let newObj = new Proxy(obj, {
  get: function (target, key, receiver) {
    return 1000
  },
  set: function (target, key, value, receiver) {
    // console.log('a 属性被修改了');
    updateView()
    return true
  }
})

newObj.a = 2

