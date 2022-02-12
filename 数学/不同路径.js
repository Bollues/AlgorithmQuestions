/**
 * 排列数
 * 
 */

// 利用排列数公式算排列数
const helper = (n) => {
    let res = 1
    for (let i = 2; i <= n; i++) res *= i
    return res
}
var uniquePaths = function(n, m) {
  return ( helper(m + n - 2) / (helper(m - 1) * helper(n - 1)) )
};

// 利用组合数递推公式算排列数
// const helper = (n, m) => {
//   if(m === 0 || m === n) return 1
//   if(n === 1) return 1
//   else return helper(n-1, m-1) + helper(n-1, m)
// }
// var uniquePaths = function(n, m) {
//   return helper(m + n - 2, m - 1)
// }

console.log(uniquePaths(51, 9))