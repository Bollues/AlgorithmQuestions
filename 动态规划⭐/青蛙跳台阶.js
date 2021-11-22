/**
 * 初始值不一样的斐波那契
 * 
 */


var numWays = function(n) {
  if (n === 0) return 1
  else if (n === 1) return 1
  else if (n === 2) return 2
  let p = 1, q = 1, r = 2
  for (let i = 2; i < n; i++) {
      p = q
      q = r
      r = (p + q) % 1000000007
  }
  return r
};

console.log(numWays(7))