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

console.log(myAtoi("-42a1234"))