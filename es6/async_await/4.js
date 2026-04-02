function getData() { // 假设这是一个异步
  return 'data'
}

// let res = getData()
// console.log(res);

async function foo() { // 声明了一个可以调用异步的函数
  try {
    await getData();
  } catch (error) {
    console.log(error);  // error就是 try 中的错误
  }

  // xxxxx
}


