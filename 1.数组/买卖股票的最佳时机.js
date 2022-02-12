/**
 * 遍历找最低的买点
 * 然后每次比较 当前卖的盈利 和 res
 */
var maxProfit = function (prices) {
  let maxProfit = 0
  let minPrice = 10000
  for (let price of prices) {
    maxProfit = Math.max(maxProfit, price - minPrice)
    minPrice = Math.min(minPrice, price)
  }
  return maxProfit
};