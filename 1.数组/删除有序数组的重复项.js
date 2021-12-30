/**
 * 双指针
 */
var removeDuplicates = function (nums) {
  let left = 0
  let right = 1
  while (right < nums.length) {
    if (nums[right] === nums[left]) {
      right++
    } else {
      left++
      nums[left] = nums[right]
      right++
    }
  }
  return left + 1
};

let nums = [1, 1, 2, 2, 3, 3, 3, 3, 3]
console.log(...nums.slice(0, removeDuplicates(nums)))