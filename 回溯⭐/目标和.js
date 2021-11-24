var findTargetSumWays = function (nums, target) {
  let count = 0
  const backTrack = (nums, index, sum, target) => {
    if (index === nums.length) {
      if (sum === target) {
        count++
      }
    } else {
      backTrack(nums, index + 1, sum + nums[index], target)
      backTrack(nums, index + 1, sum - nums[index], target)
    }
  }
  backTrack(nums, 0, 0, target)
  return count
};

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3))