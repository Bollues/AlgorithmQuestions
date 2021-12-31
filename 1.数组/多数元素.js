/**
 * 投票算法
 * https://leetcode-cn.com/problems/majority-element/solution/duo-shu-yuan-su-by-leetcode-solution/
 * n 1
 */
var majorityElement = function (nums) {
  let count = 0
  let candidate
  for (num of nums) {
    if (count === 0) candidate = num
    count += (num === candidate ? 1 : -1)
  }
  return candidate
}


/**
 * map
 * n n
 */
var majorityElement = function (nums) {
  let condition = Math.floor(nums.length / 2)
  let map = {}
  for (num of nums) {
    if (!map[num]) map[num] = 1
    else map[num] += 1
  }

  for (key in map) {
    if (map[key] > condition) return parseInt(key)
  }
};