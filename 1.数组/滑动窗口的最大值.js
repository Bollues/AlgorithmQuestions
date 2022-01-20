/**
 * 老老实实计算每个滑动窗口的最大值
 * 用slice得到滑动窗口内的数
 */
var maxSlidingWindow = function (nums, k) {
  if (nums.length === 0) return []
  if (nums.length === k) return [Math.max(...nums)]

  let res = []
  for (let i = k - 1; i < nums.length; i++) {
    res.push(Math.max(...nums.slice(i - k + 1, i + 1)))
  }
  return res
};

/**
 * 先获取第一个滑动窗口内的最大值，记录为max
 * 之后每滑动一次，就判断当前的数字是否比max大
 *    如果比max大，就令其为新的max，并直接push这个数
 *    如果比max小，就计算新滑动窗口内的max，并push新max
 */
var maxSlidingWindow = function(nums, k) {
  if (nums.length === 0) return []
  if (nums.length === k) return [Math.max(...nums)]
  
  let max = -Infinity
  let res = []

  for (let i = 0; i < k; i++) max = Math.max(max, nums[i])
  res.push(max)

  for (let i = k; i < nums.length; i++) {
      if (nums[i] > max) {
          max = nums[i]
          res.push(max)
      } else {
          max = -Infinity
          for (let j = i - k + 1; j <= i; j++) max = Math.max(max, nums[j])
          res.push(max)
      }
  }
  return res
};