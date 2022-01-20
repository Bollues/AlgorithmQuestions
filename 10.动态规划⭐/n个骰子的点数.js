/**
 * n个骰子掷出x的概率为：f(n,x) = 6∑i (f(n−1,x−i) × 1/6)
 */
var dicesProbability = function (n) {
  let dp = new Array(6).fill(1 / 6)
  for (let num = 2; num < n + 1; num++) {     // 骰子数量
    let res = new Array(5 * num + 1).fill(0)        // 骰子数量对应的临时概率
    for (let i = 0; i < dp.length; i++) {
      for (let x = 0; x < 6; x++) {
        res[i + x] += dp[i] / 6
      }
    }
    dp = res
  }
  return dp
};