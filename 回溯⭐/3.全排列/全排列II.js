/**
 * 同组合总和II
 * 
 * 本题的难点在于：集合（数组candidates）有重复元素，但还不能有重复的组合。
 * 我们要去重的是同一树层上的“使用过”，同一树枝上的都是一个组合里的元素，不用去重。
 * 树层去重的话，需要对数组排序！
 */

var permuteUnique = function(nums) {
  nums = nums.sort((a, b) => a - b)
  let res = []
  let path = []
  backTrack([])
  return res

  function backTrack (used) {
      if (path.length === nums.length) {
          res.push([...path])
          return
      }
      let flag = 999        // 用flag 记录同一树层中相同的元素
      for (let i = 0; i < nums.length; i++) {
          if (used[i] || flag === nums[i]) continue
          path.push(nums[i])
          used[i] = true
          flag = nums[i]        // 
          backTrack(used)
          path.pop()
          used[i] = false
      }
  }
};