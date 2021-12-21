/**
 * 本题的难点在于：集合（数组candidates）有重复元素，但还不能有重复的组合。
 * 我们要去重的是同一树层上的“使用过”，同一树枝上的都是一个组合里的元素，不用去重。
 * 树层去重的话，需要对数组排序！
 */

var combinationSum2 = function (candidates, target) {
  let path = []
  let res = []
  let sum = 0
  candidates.sort((a, b) => a - b)
  backTrack(0)
  return res

  function backTrack(index) {
    if (sum === target) {
      res.push([...path])
      return
    }
    else if (sum > target) return
    else {
      let flag = -1
      for (let i = index; i < candidates.length; i++) {
        const n = candidates[i]
        if (n > target - sum || n === flag) continue       // n === flag，说明同一树层出现了重复元素
        path.push(n)
        sum += n
        flag = n
        backTrack(i + 1)
        path.pop()
        sum -= n
      }
    }
  }
};