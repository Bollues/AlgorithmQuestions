/**
 * 二分查找，要注意的是如何确定新的左右边界，确定边界的前提是知道target在哪部分里
 * 先根据midNum与nums[0]的比较结果判断哪部分是有序的
 * 得到有序序列后就可以知道target在哪部分里了
 */


var search = function (nums, target) {
  if (!nums) return -1
  let left = 0
  let right = nums.length - 1
  let mid
  while (left <= right) {
    mid = Math.floor((right + left) / 2)
    midNum = nums[mid]

    if (midNum === target) return mid

    // 先判断哪部分是有序的
    if (nums[0] <= midNum) {         // 左侧是有序的
      if (target >= nums[0] && target < midNum) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {            // 右侧是有序的
      if (target > midNum && target <= nums[nums.length - 1]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
};