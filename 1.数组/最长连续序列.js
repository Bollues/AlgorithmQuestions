/**
 * 先加入set
 * 从前往后遍历num，如果num-1不存在set中，说明num是连续序列的第一个
 *      然后依次看num + 1在不在set中，同时维护maxLen
 */
var longestConsecutive = function (nums) {
  if (nums.length <= 1) return nums.length
  let set = new Set()
  nums.forEach(num => set.add(num))
  let res = 1, tmp = 1
  for (let num of nums) {
    set.add(num)
    tmp = 1
    if (set.has(num - 1)) {
      continue
    } else {
      while (set.has(++num)) tmp += 1
    }
    res = Math.max(res, tmp)
  }
  return res
};