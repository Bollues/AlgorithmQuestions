/**
 * 
 */
var myAtoi = function (s) {
  let pre = ""
  let num = ""
  let idx = 0

  while (s[idx] === " ") idx++      // 去掉前导空格

  while (s[idx] === "+" || s[idx] === "-") {
    if (pre) return 0         // 符号位前不能有字符
    pre = s[idx++]
  }

  while (s[idx] && s[idx] in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) {
    num += s[idx++]
  }

  let res = Number(pre + num) || 0
  res = Math.max((-2) ** 31, res)
  res = Math.min(2 ** 31 - 1, res)
  return res
}

/**
 * 用startFlag记录数字开始位
 * 用negative记录负数标志位
 * 如果 startFlag === false 时出现了前导空格，continue
 * 如果 startFlag === false 时出现了正负号，记录标志位，并记录startFlag = true
 * 如果 startFlag === false 时出现了数字，记录该数字，并记录startFlag = true
 * 如果 startFlag === false 时出现了字母，直接return 0
 * 如果 startFlag === true 后出现的不是数字，就截断
 * 
 * 最后变成数字，并判断是否大于2 ** 32 - 1，小于 -2 ** 32
 */
var strToInt = function (str) {
  let startFlag = false       // 数字开始位
  let negative = false        // 负数标志位
  let numberStr = ''
  for (letter of str) {
    if (!startFlag) {       // 还未开始
      if (letter === '-') {
        startFlag = true
        negative = true
      } else if (letter === '+') {
        startFlag = true
      } else if (letter in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) {
        startFlag = true
        numberStr += letter
      } else if (letter !== ' ') {
        return 0
      }
      continue    // letter合法但还没到数字开始
    } else {        // 已经开始了
      if (!(letter in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'])) break
      else numberStr += letter
    }
  }
  if (numberStr.length === 0) return 0
  let res = negative ? -numberStr * 1 : numberStr * 1
  res = Math.max((-2) ** 31, res)
  res = Math.min(2 ** 31 - 1, res)
  return res
};

console.log(myAtoi("-42a1234"))