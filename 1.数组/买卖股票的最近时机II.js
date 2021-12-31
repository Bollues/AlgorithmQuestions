/**
 * 贪心，把所有正的都算进去
 */

var maxProfit = function(prices) {
  let pre = prices[0]
  let maxProfit = 0
  for (cur of prices) {
      if (cur <= pre) {
          pre = cur
          continue
      }
      maxProfit += (cur - pre)
      pre = cur
  }
  return maxProfit
};