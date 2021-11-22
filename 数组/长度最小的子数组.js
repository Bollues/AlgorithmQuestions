/**
 * 滑动窗口
 * 
 * 用两个指针指向头尾
 * 用sum表示头尾之间的和
 * 当和大于等于 target 时 start ++
 * 
 * 错误点：
 *    return 时判断 ans 是不是 Inf
 * 
 */

var minSubArrayLen = function (target, nums) {
  let start = 0, end= 0
  let sum = 0
  let ans = Infinity
  while (end < nums.length) {
    sum += nums[end]
    while (sum >= target) {
      ans = Math.min(ans, end - start + 1)
      sum -= nums[start]
      start ++
    }
    end ++
  }
  return ans === Infinity ? 0 : ans
};


console.log(minSubArrayLen(7, [2,3,1,2,4,3]))