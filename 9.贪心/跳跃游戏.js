var canJump = function (nums) {
  if (nums.length === 1) return true
  const target = nums.length
  let maxLen = 0
  for (let i = 0; i < target; i++) {
    if (i <= maxLen) {
      maxLen = Math.max(maxLen, i + nums[i])
      if (maxLen >= target - 1) return true
    }
  }
  return false
};