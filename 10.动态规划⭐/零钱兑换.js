
/**
 * 
 * 以 [1,2,5] 11 为例
 * F(11) = min( F(10), F(9), F(6) ) + 1
 *       = min( F(5), F(4), F(1) ) + 2
 *       = 3
 * 
 * 
 * 错误点
 *    new Array(amount + 1)
 *    i = coin
 *    dp[i - coin] + 1
 *    dp[amount]
 */

 var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0

  // 先考虑只用第一枚银币，再考虑只用前两枚硬币 ... ，最后考虑用上所有的硬币
  for (let coin of coins) {
    // 0-amount的每种情况，都要求所用的银币数最少
    for (let i = coin; i <= amount; i ++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
    }
    console.log(dp)   // 直观感受dp数组的变化
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount]
};


console.log(coinChange([1,2,5], 11))