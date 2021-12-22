/**
 * 
 * 每段尽可能一样长，三种情况
 * 3 ... 1，取 3 ... 2, 2
 * 3 ... 2  取 3 ... 2
 * 3 ... 0
 */

var cuttingRope = function (n) {
  if (n === 2) return 1
  if (n === 3) return 2
  const x = n / 3 | 0
  const y = n % 3
  if (y === 1) return Math.pow(3, x - 1) * 4
  else if (y === 2) return Math.pow(3, x) * 2
  else return Math.pow(3, x)
};


/**
 * 进阶版
 * n 很大，会溢出，所以不能直接算完返回，要每算一步 % 1000000007
 */

var cuttingRope = function (n) {
  if (n === 2) return 1
  if (n === 3) return 2
  let res = 1
  while (n > 4) {
    n -= 3
    res = res * 3 % 1000000007
  }
  return res * n % 1000000007
};