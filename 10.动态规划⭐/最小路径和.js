/**
 * 动态规划
 * 参考：https://leetcode-cn.com/problems/minimum-path-sum/solution/zui-xiao-lu-jing-he-by-leetcode-solution/
 * 
 * 可以优化空间，将原始数组作为dp数组
 * 
 */

// 优化后
var minPathSum = function(grid) {
  const n = grid.length
  const m = grid[0].length
  // 状态转移
  for (let i = 0; i < n ; i++) {
    for (let j = 0; j < m ; j++) {
      if (i === 0 && j !== 0) grid[i][j] = grid[i][j - 1] + grid[i][j]
      else if (i !== 0 && j === 0) grid[i][j] = grid[i - 1][j] + grid[i][j]
      else if (i !== 0 && j !== 0) grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j]
    }
  }
  return grid[n - 1][m - 1]
}

// 优化前
// var minPathSum = function (grid) {
//   if (!grid || !grid[0]) return 0

//   // 初始化
//   const rows = grid.length
//   const cols = grid[0].length
//   let dp = new Array(rows)
//   for (let i = 0; i < dp.length; i++) dp[i] = new Array(cols).fill(0)
//   dp[0][0] = grid[0][0]

//   // 生成dp数组的第一列和第一行
//   for (let i = 1; i < rows; i++) {
//     dp[i][0] = dp[i - 1][0] + grid[i][0]
//   }
//   for (let i = 1; i < cols; i++) {
//     dp[0][i] = dp[0][i - 1] + grid[0][i]
//   }

//   // 动态生成dp数组的其他行列
//   for (let i = 1; i < rows; i++) {
//     for (let j = 1; j < cols; j++) {
//       dp[i][j] = Math.min(dp[i - 1][j] , dp[i][j - 1]) + grid[i][j]
//     }
//   }
//   return dp[rows - 1][cols - 1]
// };