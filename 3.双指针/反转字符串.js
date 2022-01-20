/**
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 */

var reverseString = function (s) {
  let left = 0
  let right = s.length - 1
  let res
  let tmp
  while (left < right) {
    tmp = s[left]
    s[left] = s[right]
    s[right] = tmp
    left++
    right--
  }
  return res
};

console.log(reverseString("rollingball"))