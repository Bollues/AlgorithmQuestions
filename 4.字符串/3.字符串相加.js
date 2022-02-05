/**
 * 从后往前遍历字符串，i范围是(1, Math.max(len1, len2)]
 * digit = sum / 10 | 0
 * ans = sum % 10 + ans
 */

var addStrings = function (num1, num2) {
  const len1 = num1.length
  const len2 = num2.length

  let sum
  let digit = 0
  let ans = ''
  for (let i = 1; i <= Math.max(len1, len2); i++) {
    if ((len1 - i) < 0) {
      sum = digit + Number(num2[len2 - i])
    } else if ((len2 - i) < 0) {
      sum = digit + Number(num1[len1 - i])
    } else {
      sum = digit + Number(num1[len1 - i]) + Number(num2[len2 - i])
    }
    digit = sum / 10 | 0
    ans = sum % 10 + ans
  }
  return digit ? digit + ans : ans
};

console.log(addStrings('11', '123'))