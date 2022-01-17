/**
 * 二分
 *    - 如果nums[mid] === target时，中心扩散找头尾
 */

var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    if (nums[left] === target && nums[right] === target) return right - left + 1
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] < target) left = mid + 1
    else if (nums[mid] > target) right = mid - 1
    else {          // nums[mid] === target时，中心扩散
      left = right = mid
      while (nums[left] === target) left--
      while (nums[right] === target) right++
      return right - left - 1
    }
  }
  return 0
};