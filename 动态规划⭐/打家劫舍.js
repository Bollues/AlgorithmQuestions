/**
 * k = 1 偷 1
 * k = 2 偷 max(1,2)
 * ...
 * k = k 偷 dp[k] = max( nums[k] + dp[k-2] , dp[k-1] )
 * 
 * a, b = b, max(a + nums[k], b)
 */

// 优化空间，用两个变量代替数组
var rob = function (nums) {
  const len = nums.length
  if (len === 1) return nums[0]
  if (len === 2) return Math.max(nums[0], nums[1])
  let first = nums[0], second = Math.max(nums[0], nums[1])
  for (let i = 2; i < len; i++) {
    let tmp = first
    first = second
    second = Math.max(tmp + nums[i], second)
  }
  return second
};