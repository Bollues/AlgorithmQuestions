/**
 * 双指针 + 当前位置i
 * 用p0来交换0、用p1来交换1
 * 
 * 伪代码：
 * 用i遍历数组：
 *    - 遍历到1
 *        nums[i] 与 nums[p1]进行交换，并使p1++
 *    - 遍历到0
 *        nums[i] 与 nums[p0]进行交换，并使p0++
 *            - 如果 p0 < p1，还需要将 nums[i] 与 nums[p1] 进行交换
 *        然后p0++、p1++
 */

var sortColors = function (nums) {
  let p0 = 0
  let p1 = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      [nums[i], nums[p1]] = [nums[p1], nums[i]]
      p1++
    } else if (nums[i] === 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]]
      if (p0 < p1) [nums[i], nums[p1]] = [nums[p1], nums[i]]
      p0++
      p1++
    }
  }
  return nums
};