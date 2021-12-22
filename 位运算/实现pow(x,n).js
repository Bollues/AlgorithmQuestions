/**
 * 比如:
 * 2的10次方 = 2的5次方 * 2的5次方
 *          = (2的2次方 * 2的2次方 * 2) * (...)
 */

var myPow = function(x, n) {
  if (n === 0) return 1
  if (n === 1) return x
  if (n === -1) return 1 / x
  
  let result = myPow(x, n >> 1)   // 用右移代替除以2
  result *= result
  
  if ((n & 1) == 1) result *= x   // 用位运算代替求余运算符来判断一个数是不是奇数还是偶数
  return result
};

console.log(myPow(2.000000, -2147483648))