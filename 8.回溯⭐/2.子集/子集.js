/**
 *            123
 *     |       |     | 
 *   1(23)    2(3)   3
 *   |    |    |
 *   2(3) 3    3
 *   |
 *   3
 * 
  */


 var subsets = function(nums) {
  let res = []
  let path = []
  backTrack(0)
  return res

  function backTrack (index) {
      res.push([...path])
      for (let i = index; i < nums.length; i++) {
          path.push(nums[i])
          backTrack(i + 1)
          path.pop()
      }
  }
};