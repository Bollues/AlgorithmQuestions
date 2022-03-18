/**
 * backtracking的参数只需要i（代表ip地址中某一数字的起始位）就够了
 */


var restoreIpAddresses = function (s) {
  if (s.length < 4) return []
  let res = []
  let path = []
  backTrack(0)
  return res

  function backTrack(index) {
    if (index >= s.length && path.length === 4) {
      res.push(path.join('.'))
      return
    }
    for (let i = index; i < s.length; i++) {
      const ipAddr = s.substr(index, i - index + 1)
      if (ipAddr[0] === '0' && ipAddr.length > 1) continue
      if (path.length > 4 || Number(ipAddr) > 255) continue
      path.push(ipAddr)
      backTrack(i + 1)
      path.pop()
    }
  }
};

console.log(restoreIpAddresses('1243243'))
