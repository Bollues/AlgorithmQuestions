/**
 * 寻找第一个升序排列，left = 升序排列的第一位
 *    先看left是否大于等于0
 *        - 是，从后往前寻找第一个比nums[left]大的数，其索引记为right，交换left和right的值
 *        - 不是，说明数组是递增的，不做操作
 *    然后从数组中截取left + 1到尾的数，sort一下，并替换原nums中从left + 1起后面的数
 */
var nextPermutation = function (nums) {
  let left = nums.length - 2
  let right
  // 寻找第一个升序排列
  while (nums[left] >= nums[left + 1]) left -= 1      // left是升序数列中小的数的索引
  // 非递增排列
  if (left >= 0) {
    right = nums.length - 1
    while (right >= 0 && nums[left] >= nums[right]) right -= 1      // 找到第一个比nums[left]大的数
    let tmp = nums[left]                // 交换
    nums[left] = nums[right]
    nums[right] = tmp
  }
  /**
   * 后面的操作还可以优化空间
   * 通过左右交换数值
   */
  let subarr = nums.slice(left + 1)
  subarr.sort((a, b) => a - b)
  nums.splice(left + 1, subarr.length, ...subarr)
  return nums
};

/**
 * n, 1的解法
 */
function nextPermutation(nums) {
  let i = nums.length - 2;                   // 向左遍历，i从倒数第二开始是为了nums[i+1]要存在
  while (i >= 0 && nums[i] >= nums[i + 1]) { // 寻找第一个小于右邻居的数
    i--;
  }
  if (i >= 0) {                             // 这个数在数组中存在，从它身后挑一个数，和它换
    let j = nums.length - 1;                // 从最后一项，向左遍历
    while (j >= 0 && nums[j] <= nums[i]) {  // 寻找第一个大于 nums[i] 的数
      j--;
    }
    [nums[i], nums[j]] = [nums[j], nums[i]]; // 两数交换，实现变大
  }
  // 如果 i = -1，说明是递减排列，如 3 2 1，没有下一排列，直接翻转为最小排列：1 2 3
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {                            // i 右边的数进行翻转，使得变大的幅度小一些
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
}