var search = function(nums, target) {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
      let binary = Math.floor((end - start) / 2) + start
      if (nums[binary] == target) return binary
      else if (nums[binary] > target) end = binary - 1
      else start = binary + 1
  }
  return -1
};