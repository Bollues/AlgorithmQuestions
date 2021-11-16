/**
 * 
 * 原数组根据第一个数字进行排序（注意js的排序） 
 * 用一个数组记录结果
 * 如果无重合就往里加
 * 否则，比较最后一个数组的第二个数字，取大者
 */

var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let merged = []

  for (arr of intervals) {
      // 如果当前列表为空，或者区间无重合，直接添加
      if (merged.length === 0 || merged[merged.length - 1][1] < arr[0]) {
          merged.push(arr)
      } else {
          // 否则，进行合并，看谁第二个数字大
          merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], arr[1])
      }
  }
  return merged
};