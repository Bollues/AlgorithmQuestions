/**
 * 反转字符串中的每个单词顺序
 * 双指针
 */
var reverseWords = function (s) {
  const len = s.length
  if (len === 0) return ''
  let res = []
  for (let i = len - 1; i >= 0; i--) {
    let end = i
    while (s.charAt(end) === ' ') end--
    let start = end
    while (start >= 0 && s.charAt(start) !== ' ') {
      start--
    }
    if (end > start) res.push(s.substring(start + 1, end + 1))
    i = start
  }
  return res.join(' ')
};

/**
 * 反转字符串中的每个字母
 */
const reverseWords = s => {
  const arr = s.split(' ');
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].split('').reverse().join(''));
  }
  return res.join(' ');
}

console.log(reverseWords("Let's take LeetCode contest"))