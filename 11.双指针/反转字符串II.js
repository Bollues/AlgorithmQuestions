var reverseStr = function (s, k) {
  let left = 0
  let right = k - 1
  let tmpStart, tmpEnd
  s = s.split('')

  while (right < s.length) {
    tmpStart = left
    tmpEnd = right
    while (tmpEnd > tmpStart) {
      [s[tmpStart], s[tmpEnd]] = [s[tmpEnd], s[tmpStart]]
      tmpStart ++
      tmpEnd -- 
    }
    left += 2 * k
    right += 2 * k
  }

  if (left < s.length) {      // 将剩余字符全部反转
    tmpStart = left
    tmpEnd = s.length - 1
    while (tmpEnd > tmpStart) {
      [s[tmpStart], s[tmpEnd]] = [s[tmpEnd], s[tmpStart]]
      tmpStart ++
      tmpEnd -- 
    }
  }

  return s.join('')
};

console.log(reverseStr("abcdefg", 2))