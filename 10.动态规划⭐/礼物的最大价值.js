/**
 * dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + grid[i][j]
 */

// 用二维数组作为dp
var maxValue = function (grid) {
  const row = grid.length
  const col = grid[0].length
  if (row === 0 && col === 0) return 0
  if (row === 1 && col === 1) return grid[0][0]
  let dp = new Array(row)
  for (let i = 0; i < row; i++) dp[i] = new Array(col).fill(0)
  dp[0][0] = grid[0][0]

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j === 0) continue
      if (i === 0) dp[i][j] = dp[i][j - 1] + grid[i][j]
      else if (j === 0) dp[i][j] = dp[i - 1][j] + grid[i][j]
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }
  return dp[row - 1][col - 1]
};


// 原地操作，将grid作为dp
var maxValue = function (grid) {
  const row = grid.length
  const col = grid[0].length
  if (row === 0 && col === 0) return 0
  if (row === 1 && col === 1) return grid[0][0]

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (i === 0 && j === 0) continue
      if (i === 0) grid[i][j] += grid[i][j - 1]
      else if (j === 0) grid[i][j] += grid[i - 1][j]
      else grid[i][j] += Math.max(grid[i - 1][j], grid[i][j - 1])
    }
  }
  return grid[row - 1][col - 1]
};