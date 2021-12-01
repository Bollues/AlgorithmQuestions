/**
 * 方法一：转成数组
 * 方法二：原地替换（时间、空间复杂度反而高了。。。）
 */

// 转成数组
var replaceSpace = function(s) {
  s = s.split('')
  for (let i = 0; i < s.length; i ++) {
      if (s[i] === ' ') s[i] = '%20'
  }
  return s.join('')
};

// 原地替换
var replaceSpace = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === ' ') s = s.substr(0, i) + '%20' + s.substr(i + 1, s.length)
  }
  return s
};

console.log(replaceSpace('rolling ball'))