/**
 * 如果堆里的石头数目为 44 的倍数时，你一定会输掉游戏
 */
var canWinNim = function(n) {
  return n % 4 !== 0
};