/**
 * 1. 确定digit
 * 2. 确定在哪个数中
 * 3. 确定在数字中的数位
 */
var findNthDigit = function (n) {
  let digit = 1
  let count = 9
  let start = 1
  while (n > count) {         // 确定digit
    digit += 1
    start *= 10
    n -= count
    count = 9 * digit * start
  }
  let num = start + ((n - 1) / digit || 0)          // 确定在哪个数中
  return parseInt(num.toString()[(n - 1) % digit])        // 确定是数字中的数位
};



var findNthDigit = function (n) {
  let digit = 1
  while (digit * (10 ** digit) < n) {
    n += 10 ** digit
    digit += 1
  }
  return parseInt((n / digit || 0).toString()[n % digit])
};