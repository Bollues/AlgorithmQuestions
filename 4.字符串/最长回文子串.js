// 中心扩展算法
// 还有一个马拉车算法没看

var longestPalindrome = function(s) {
  let start = end = 0

  for (let i = 0; i < s.length; i++) {
      // 中心是一个字符的情况
      let [left1, right1] = expendFromCenter(s, i, i)
      // 中心是两个字符的情况
      let [left2, right2] = expendFromCenter(s, i, i + 1)
      
      if ((right1 - left1) > (end - start)) {start = left1; end = right1;}
      if ((right2 - left2) > (end - start)) {start = left2; end = right2;}
  }
  
  return s.slice(start, end + 1)
};

var expendFromCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      left --
      right ++
  }
  return [left + 1, right - 1]
}

console.log(longestPalindrome('rollingball'))

