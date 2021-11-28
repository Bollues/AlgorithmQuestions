/**
 * 
 * 递归参数：index、list
 *  
 */


var subsets = function(nums) {
  const len = nums.length
  let ans = []
  backTrack(0, [])
  return ans

  function backTrack(index, list) {
      ans.push([...list])
      for (let i = index; i < len; i++) {
          list.push(nums[i])
          backTrack(i + 1, list)
          list.pop()
      }
  }
};