let middleware = []

middleware.push(function(ctx, next){
  console.log('1')
  next()
  console.log('end 1')
})
middleware.push(function(ctx, next){
  console.log('2')
  next()
  console.log('end 2')
})
middleware.push(function(ctx, next){
  console.log('3')
  next()
  console.log('end 3')
})


function compose(middleware){ // 递归
  function dispatch(i) {
    if (i === middleware.length) return
    let fn = middleware[i]
    const next = () => {
      dispatch(i + 1)
    }

    fn(this, next)
  }

  dispatch(0)
}

compose(middleware) // 1 2 3    end 3    end 2    end 1