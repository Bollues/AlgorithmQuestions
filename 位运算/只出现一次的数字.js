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


/**
 * 只出现一次的两个数
 */
var singleNumbers = function (nums) {
  let tmp = 0
  for (const num of nums) {       // 第一次拿到两个数A, B异或的结果
    tmp ^= num
  }

  let digit = 1
  while ((tmp & digit) === 0) digit = digit << 1          // 从 tmp 中取为1的一位

  let tmp1 = 0
  let tmp2 = 0
  for (const num of nums) {           // 分组得到两个数
    if (num & digit) tmp1 ^= num
    else tmp2 ^= num
  }
  return [tmp1, tmp2]
};

/**
 * 考虑数字的二进制形式，对于出现三次的数字，各 二进制位 出现的次数都是 3 的倍数。
 * 因此，统计所有数字的各二进制位中 1 的出现次数，并对 3 求余，结果则为只出现一次的数字。
 */
function singleNumber(nums) {
  let ones = 0, twos = 0
  for (const num of nums) {
    ones = ones ^ num & ~twos
    twos = twos ^ num & ~ones
  }
  return ones
}