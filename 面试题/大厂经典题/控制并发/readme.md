1. 保证所有的任务都受控制（给任务包裹一层函数）
2. 创建添加任务的 add 函数，并将 add 的 resolve，reject 同任务一起存放
3. 创建执行任务的 run 函数，在每个任务执行完毕后执行 add函数的resolve，reject，最后递归执行 run 函数