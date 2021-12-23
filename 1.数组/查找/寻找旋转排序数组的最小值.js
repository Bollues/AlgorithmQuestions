/**
 * 二分查找
 * 
 * 参考：https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/solution/xun-zhao-xuan-zhuan-pai-xu-shu-zu-zhong-5irwp/
 * 数组无重复
 * 错误点：
 *    end = pivot 不是 end = pivot + 1，因为pivot可能正好是答案
 */

var findMin = function (nums) {
  let start = 0
  let end = nums.length - 1
  while (start < end) {
    const pivot = start + Math.floor((end - start) / 2)
    if (nums[pivot] > nums[end]) start = pivot + 1
    else end = pivot
  }
  return nums[start]
};


/**
 * 数组有重复
 * 第三种情况，numbers[pivot] === numbers[end]，由于有重复值存在，并不能确定numbers[pivot]究竟是在最小值左侧还是最小值右侧，所以只能忽略右端点（反正有重复值）
 * 
 */
 var minArray = function(numbers) {
  let start = 0
  let end = numbers.length - 1
  while (start < end) {
      let pivot = start + Math.floor((end - start) / 2)
      if (numbers[end] > numbers[pivot]) end = pivot
      else if (numbers[end] < numbers[pivot]) start = pivot + 1
      else end --
  }
  return numbers[end]
};
