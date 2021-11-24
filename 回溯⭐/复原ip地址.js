/**
 * 
 * 
 */


var restoreIpAddresses = function (s) {
  let res = [], path = []
  const sLen = s.length
  backtracking(0)
  return res

  function backtracking(i) {
    // path长度为4，且string用完了，就认为是有效IP地址
    if (path.length === 4 && i === sLen) {
      res.push(path.join("."))
      return
    }
    // 遍历一般情况
    for (let j = i; j < sLen; j++) {
      const str = s.substr(i, j - i + 1)
      if (str.length > 3 || +str > 255) break     // 每个数字最多3位，且不大于255
      if (str.length > 1 && str[0] === "0") break   // 如果数字大于1位，且以0开头，这种情况不合法
      path.push(str)
      backtracking(j + 1)
      path.pop()
    }
  }
}

console.log(restoreIpAddresses('1243243'))
