let nums = [1, 3, -1, -3, 2, 3, 6, 7], k = 3  //[3,3,5,5,6,7]

var maxSlidingWindow = function(nums, k) {
  const len = nums.length
  const res = []
  const deque = []

  for(let i = 0; i < len; i++) {
    while(deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }

    deque.push(i)

    // 当队列头部存放的值 和 i 形成的区间大于窗口宽度时
    while(deque.length && deque[0] <= i - k) {
      deque.shift()
    }

    // 该取最大值
    if (i >= k - 1) {
      res.push(nums[deque[0]])
    }
  }

  return res
};