/**
 * 
 *                122
 *      |          |      | 
 *    1(22)       2(2)   2(删)
 *    |     |      |
 *   2(2) 2(删)    2
 *    |
 *    2
 * 
 * 我们要去重的是同一树层上的“使用过”，同一树枝上的都是一个组合里的元素，不用去重。
 * 树层去重的话，需要对数组排序！
 */


 var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b)
  let res = []
  let path = []
  backTrack(0)
  return res

  function backTrack (index) {
      res.push([...path])
      for (let i = index; i < nums.length; i++) {
          if (i > index && nums[i] === nums[i - 1]) continue        // i > index 是精髓
          path.push(nums[i])
          backTrack(i + 1)
          path.pop()
      }
  }
};