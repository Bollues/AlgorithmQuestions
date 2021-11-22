var restoreIpAddresses = function (s) {
  let res = [], path = []
  backtracking(0)
  return res

  function backtracking(i) {
    const len = path.length
    
    // path长度为4，且string用完了，就认为是有效IP地址
    if (len === 4 && i === s.length) {
      res.push(path.join("."))
      return
    }
    // 
    for (let j = i; j < s.length; j++) {
      const str = s.substr(i, j - i + 1)
      if (str.length > 3 || +str > 255) break
      if (str.length > 1 && str[0] === "0") break
      path.push(str)
      backtracking(j + 1)
      path.pop()
    }
  }
}

console.log(restoreIpAddresses('1243243'))
