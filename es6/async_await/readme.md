# 异步
1. js 单线程
2. 如果所有代码都同步执行，则执行效率大大降低

# async / await
1. async 添加在函数声明之前，相当于在函数中 返回了一个 Promise 的实例对象
2. await 后面接的是异步，必须是一个Promise 的实例对象, await 会将后面的代码的执行结果返回出来


# promise
1. Promise.resolve() 会得到一个状态变更为成功的 promise 对象


# 红绿灯问题

