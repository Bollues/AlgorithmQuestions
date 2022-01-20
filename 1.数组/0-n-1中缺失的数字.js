/**
 * 二分
 * left <= right时：
 *    如果nums[mid] === mid，说明缺失的数字在右边，令left = mid
 *    如果nums[mid] !== mid，说明缺失的数字在左边，令right = mid
 * 跳出循环，return left
 */

var missingNumber = function (nums) {
  let left = 0
  let right = nums.length - 1
  while (right >= left) {
    let mid = Math.floor((right + left) / 2)
    if (nums[mid] !== mid) right = mid - 1
    else left = mid + 1
  }
  return left
};