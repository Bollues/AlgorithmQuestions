var isMatch = (s, p) => {
  const n = s.length + 1
  const m = p.length + 1
  let dp = new Array(n)
  for (let i = 0; i < n; i++) dp[i] = new Array(m).fill(0)
  dp[0][0] = 1

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (p[j-1] !== '*') {
        if (match(i, j)) dp[i][j] |= dp[i-1][j-1]
      } else {
        dp[i][j] |= dp[i][j-2]
        if (match(i, j-1)) dp[i][j] |= dp[i-1][j]
      }
    }
  }
  function match(i, j) {
    if (i === 0) return false
    if (p[j-1] === '.') return true
    return s[i-1] === p[j-1]
  }
  return dp[n-1][m-1]
}

