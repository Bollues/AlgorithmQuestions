/**
 * 
 * 回溯的条件：index、sum
 */


var findTargetSumWays = function (nums, target) {
  const len = nums.length
  let count = 0
  backTrack(0, 0)
  return count

  function backTrack(index, sum) {
    if (index === len) {
      if (sum === target) count++
    } else {
      backTrack(index + 1, sum + nums[index])
      backTrack(index + 1, sum - nums[index])
    }
  }
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))