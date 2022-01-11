/**
 * 类似于青蛙跳台的经典问题（青蛙跳台阶，一次可以跳1级，也可以跳2级，问n级台阶多少种跳法)?
 * f(i) = f(i−1) + f(i−2) [i − 1 ≥ 0, 10 ≤ x ≤ 25]
 * 边界条件是 f(−1) = 0，f(0) = 1
 */

// 优化前
const translateNum = (num) => {
  const str = num.toString()
  const n = str.length

  const dp = new Array(n + 1)
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i < n + 1; i++) {
    const tmp = Number(str[i - 2] + str[i - 1])
    if (tmp >= 10 && tmp <= 25) dp[i] = dp[i - 1] + dp[i - 2]
    else dp[i] = dp[i - 1]
  }

  return dp[n]
}

// 滚动数组优化空间
const translateNum = (num) => {
  const str = num.toString()
  const n = str.length

  let prev = 1
  let cur = 1

  for (let i = 2; i < n + 1; i++) {
    const tmp = Number(str[i - 2] + str[i - 1])
    if (tmp >= 10 && tmp <= 25) {
      let tmp = cur
      cur = prev + cur
      prev = tmp
    } else {
      prev = cur
    }
  }

  return cur
}