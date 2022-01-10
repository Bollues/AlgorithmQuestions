/**
 * 哈希表存出现次数
 */
var firstUniqChar = function (s) {
  if (s.length === 0) return ' '
  let map = {}
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) in map) {
      map[s.charAt(i)] += 1
    } else {
      map[s.charAt(i)] = 1
    }

  }
  for (item in map) {
    if (map[item] === 1) return item
  }
  return ' '
};

/**
 * 不用哈希表
 * 找到每个字符在s中的第一个index和最后一个index
 * 取index最小的return
 */
var firstUniqChar = function (s) {
  if (s.length === 0) return ' '
  let res = s.length
  for (let i = 0; i < 26; i++) {
    const code = String.fromCharCode(97 + i)
    let idx = s.indexOf(code)
    if (idx !== -1 && idx === s.lastIndexOf(code)) {
      res = Math.min(res, idx)
    }
  }

  return res === s.length ? ' ' : s.charAt(res)
};