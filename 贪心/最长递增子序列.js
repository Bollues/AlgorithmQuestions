/**
 * 贪心 + 二分查找
 * 
 * 考虑一个简单的贪心，如果我们要使上升子序列尽可能的长，则我们需要让序列上升得尽可能慢，因此我们希望每次在上升子序列最后加上的那个数尽可能的小。
 * 基于上面的贪心思路，我们维护一个数组 d[i] ，表示长度为 i 的最长上升子序列的末尾元素的最小值
 * 
 * 最后整个算法流程为：
    遍历数组 nums：
      如果 nums[i] > d[-1] 那么 d.push(nums[i])
      否则，在 d 数组中二分查找，找到第一个比 nums[i] 小的数 d[k]，并更新 d[k + 1] = nums[i]
 */

var lengthOfLIS = function(nums) {
  let subArr = [nums[0]]
  const n = nums.length
  for(let i = 1; i < n; i++) {
      if (nums[i] > subArr[subArr.length - 1]) subArr.push(nums[i])
      else {
          let left = 0
          let right = subArr.length - 1
          let loc = right
          while (left <= right) {
              let mid = Math.floor((left + right) / 2)
              if (subArr[mid] >= nums[i]) {
                  loc = mid
                  right = mid - 1
              } else {
                  left = mid + 1
              }
          }
          subArr[loc] = nums[i]
      }
  }
  return subArr.length
};