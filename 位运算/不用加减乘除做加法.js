/**
 * 算进位 -> 按位与 再 << 1
 * 算非进位和 -> 按位异或
 */

var add = function (a, b) {
  while (b) {
    let carry = (a & b) << 1    // 进位
    let sum = a ^ b             // 非进位和
    a = sum
    b = carry
  }
  return a
};