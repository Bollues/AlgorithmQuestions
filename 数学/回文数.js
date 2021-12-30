/**
 * 转换一半的字符
 */

var isPalindrome = function (number) {
  if (number < 0 || (x % 10 === 0 && x !== 0)) {        // 去掉10的情况，因为10会在return判断的时候被判为true
    return false
  }
  let revertedNumber = 0
  let digit
  while (number > revertedNumber) {
    digit = number % 10
    number = ~~(number / 10)
    revertedNumber = revertedNumber * 10 + digit
  }
  // 当数字长度为奇数时，通过 revertedNumber/10 去除处于中位的数字。
  return number === revertedNumber || number === ~~(revertedNumber / 10)
};


/**
 * 转换全部字符
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  let num1 = x
  let num2 = 0
  let digit
  while (x > 0) {
    digit = x % 10
    x = ~~(x / 10)
    num2 = num2 * 10 + digit
  }
  return num2 === num1
};