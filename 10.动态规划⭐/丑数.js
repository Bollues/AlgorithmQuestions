/**
 * 定义三个指针，一开始指向dp[0]，dp[0]为1（因为第一个丑数是1）
 * 接下来对每个指针指向的丑数*2、*3、*5，并找到最小的那个丑数，就作为dp[i]
 * 并且对应的指针+1
 */

var nthUglyNumber = function (n) {
  let dp = new Array(n).fill(0)
  dp[0] = 1
  let p2 = 0, p3 = 0, p5 = 0
  for (let i = 1; i < n; i++) {
    let num2 = dp[p2] * 2
    let num3 = dp[p3] * 3
    let num5 = dp[p5] * 5
    dp[i] = Math.min(num2, num3, num5)
    if (dp[i] === num2) p2 += 1
    if (dp[i] === num3) p3 += 1
    if (dp[i] === num5) p5 += 1
  }
  return dp[n - 1]
};