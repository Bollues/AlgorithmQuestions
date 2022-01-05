/**
 * 二分查找start、end
 */

var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1]
  let left = 0
  let right = nums.length - 1
  let startIdx = helper(left, right, true)
  let endIdx = helper(left, right, false)
  return [startIdx, endIdx]

  function helper(left, right, startFlag) {   // 二分查找start、end
    let mid
    while (right >= left) {
      mid = ((right + left) / 2) | 0
      if (nums[mid] < target) left = mid + 1
      else if (nums[mid] > target) right = mid - 1
      else {            // mid位置 === target
        if (startFlag) {        // 获取start
          if (nums[mid - 1] !== target) {
            return mid
          } else {
            right = mid - 1
          }
        } else {                // 获取end
          if (nums[mid + 1] !== target) {
            return mid
          } else {
            left = mid + 1
          }
        }
      }
    }
    return -1
  }
};