/**
 * 转移方程：
 * f(i)=max{f(i−1)+nums[i],nums[i]}
 */

var maxSubArray = function(nums) {
  let pre = 0
  let res = nums[0]
  nums.forEach(num => {
    pre = Math.max(pre + num, num)
    res = Math.max(res, pre)
  })
  return res
}