/**
 * 
 */


var findSubsequences = function (nums) {
  let res = []
  let path = []
  backTrack(0)
  return res

  function backTrack(index) {
    if (path.length > 1) res.push([...path])

    let usedNum = []      // 记录用过的数字
    for (let i = index; i < nums.length; i++) {
      if ((path.length > 0 && nums[i] < path[path.length - 1]) || usedNum[nums[i]]) continue
      usedNum[nums[i]] = true
      path.push(nums[i])
      backTrack(i + 1)
      path.pop()
    }
  }
};

console.log(findSubsequences([4, 4, 3, 2, 1]))