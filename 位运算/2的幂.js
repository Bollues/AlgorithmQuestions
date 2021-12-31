/**
 * 一个数 n 是 2 的幂，当且仅当 n 是正整数，并且 n 的二进制表示中仅包含 1 个 1。
 * 因此我们可以考虑使用位运算，将 n 的二进制表示中最低位的那个 1 提取出来，再判断剩余的数值是否为 0 即可。
 */
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};

/**
 *  右移1相当于除2
 *  左移1相当于乘2
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false
  if (n === 1) return true
  while (n > 1) {
    if ((n >> 1) !== (n / 2)) return false
    n = n >> 1
  }
  return true
};