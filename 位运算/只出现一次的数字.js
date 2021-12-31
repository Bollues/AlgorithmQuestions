/**
 * 数组中的全部元素的异或运算结果即为数组中只出现一次的数字
 */

var singleNumber = function (nums) {
  let ans = 0;
  for (const num of nums) {
    ans ^= num;
  }
  return ans;
};
