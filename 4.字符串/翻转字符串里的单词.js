/**
 * 双端队列
 * 
 */

var reverseWords = function (s) {
  let res = []
  let start = s.length - 1
  let end
  while (start >= 0) {
    if (s[start] !== ' ') {
      end = start
      while (s[start] !== ' ' && start > 0) start--
      s[start] === ' ' ? res.push(s.slice(start + 1, end + 1)) : res.push(s.slice(start, end + 1))
      start--
    } else start--
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


console.log(reverseWords("  the sky is   blue  "))