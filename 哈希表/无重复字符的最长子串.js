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
          // console.log(hashSet, maxLength)
      }
  }

  return maxLength===0 ? 1 : maxLength
};

// 95
console.log(lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ "))