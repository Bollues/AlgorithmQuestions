var moveZeroes = function (nums) {
  let pZero = 0           // 指向零的头部
  let pDoing = 0          // 指向待处理的头部

  while (pDoing < nums.length) {
    if (nums[pDoing] !== 0) {
      let tmp = nums[pZero]
      nums[pZero] = nums[pDoing]
      nums[pDoing] = tmp
      pDoing++
      pZero++
    } else {
      pDoing++
    }
  }
  return nums
};

console.log(moveZeroes([1, 0]))