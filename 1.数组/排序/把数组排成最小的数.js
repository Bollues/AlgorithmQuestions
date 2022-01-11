/**
 * 此题求拼接起来的最小数字，本质上是一个排序问题。
 * 设数组 nums 中任意两数字的字符串为 x 和 y，则规定排序判断规则为：
 *    - if (x + y > y + x) ，则 x “大于” y
 *    - else if (x + y < y + x) ，则 x “小于” y
 */

var minNumber = function (nums) {
  return nums.sort((a, b) => ('' + a + b) - ('' + b + a)).join('')
};