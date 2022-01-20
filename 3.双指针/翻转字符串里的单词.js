/**
 * 从前往后
 */

 var reverseWords = function (s) {
  let left = 0, right = 0
  let res = []
  while (right < s.length) {
    while (s[left] === ' ' && left < s.length) left++
    right = left
    while (s[right] !== ' ' && right < s.length) right++
    left !== right && res.push(s.substring(left, right))
    left = right
  }
  return res.reverse().join(' ')
};


/**
 * 从后往前
 */
var reverseWords = function (s) {
  let left = s.length - 1, right = s.length - 1
  let res = []
  while (left > 0) {
    while (s[right] === ' ' && right >= 0) right--
    left = right
    while (s[left] !== ' ' && left >= 0) left--
    left !== right && res.push(s.substring(left + 1, right + 1))
    right = left
  }
  return res.join(' ')
};

// 调用api的版本
// var reverseWords = function (s) {
//   s = s.trim()
//   let strArr = s.split(" ")
//   strArr = strArr.filter(item => item !== "")
//   strArr.reverse()
//   return strArr.join(' ')
// };

console.log(reverseWords("a"))