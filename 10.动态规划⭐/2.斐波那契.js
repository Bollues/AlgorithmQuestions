/**
 * 
 * 优化空间后的dp
 * 不存数组，只存三个数，不断替换
 */


var fib = function(n) {
  if (n < 2) return n
  const MOD = 1000000007
  let p = 0, q = 1, r = 1
  for (let i = 2; i < n; i++) {
    p = q
    q = r
    r = (p + q) % MOD
  }
  return r
}