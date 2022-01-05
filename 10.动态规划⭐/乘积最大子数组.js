/**
 * 需要两个数组记录当前最大积和当前最小积
 * 当前是正数，期望乘一个尽可能大的数，使当前数大
 * 当前是负数，期望乘一个尽可能大的数，使当前数小，这样以后遇到负数就会变大
 */
var maxProduct = function (nums) {
  let dp_max = new Array(nums.length).fill(0)
  let dp_min = new Array(nums.length).fill(0)
  dp_max[0] = nums[0]
  dp_min[0] = nums[0]
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp_max[i] = Math.max(nums[i], dp_max[i - 1] * nums[i], dp_min[i - 1] * nums[i])
    dp_min[i] = Math.min(nums[i], dp_min[i - 1] * nums[i], dp_max[i - 1] * nums[i])
  }
  dp_max.forEach(item => res = Math.max(res, item))
  return res
};

/**
 * 滚动数组优化空间
 */
var maxProduct = function (nums) {
  let prevMin = nums[0], prevMax = nums[0]
  let tmp_max = nums[0], tmp_min = nums[0]
  let res = nums[0]
  for (let i = 1; i < nums.length; i++) {
    tmp_max = prevMax * nums[i]
    tmp_min = prevMin * nums[i]
    prevMax = Math.max(nums[i], tmp_max, tmp_min)
    prevMin = Math.min(nums[i], tmp_max, tmp_min)
    res = Math.max(res, prevMax)
  }
  return res
};