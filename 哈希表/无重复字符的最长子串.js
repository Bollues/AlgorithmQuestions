/**
 * 滑动窗口
 * 
 * 注意点1：左指针从0遍历到n-1
 * 注意点2：左指针每遍历一次，就删除前一个左指针
 * 注意点3：右指针负责找最大无重复子串长度
 * 注意点4：当右指针发现有重复字符出现了，其实length已经加上了那个重复字符，所以要在右指针++之前记录最大长度
 * 注意点5：用set.has()判断是否出现重复字符
 * 注意点6：如果s非空而最大长度为0，说明全是重复的，返回1
 */

var lengthOfLongestSubstring = function(s) {
  if (!s) {return 0}
  const n = s.length
  let hashSet = new Set()
  let maxLength = 0
  let pEnd = 0
  for (let pStart = 0; pStart < n; ++pStart) {
      // start指针右移

      // 每次右移删除当前元素
      if (pStart != 0) {
          hashSet.delete(s.charAt(pStart - 1))
      }

      // end指针右移，判断最长不重复子串
      while (pEnd < n && !hashSet.has(s.charAt(pEnd))) {
          hashSet.add(s.charAt(pEnd))
          maxLength = Math.max(maxLength, pEnd - pStart + 1)
          pEnd ++
      }
  }

  return maxLength===0 ? 1 : maxLength
};

// 95
console.log(lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ "))