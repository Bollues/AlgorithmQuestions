/**
 * 如果能构成顺子，一定满足以下条件：
 * 1. 除了0以外无重复
 * 2. max - min < 5
 */
var isStraight = function (nums) {
  let min = 14
  let max = 0
  let set = new Set()
  for (const num of nums) {
    if (num === 0) continue
    min = Math.min(min, num)
    max = Math.max(max, num)
    if (set.has(num)) return false
    set.add(num)
  }
  return max - min < 5
};