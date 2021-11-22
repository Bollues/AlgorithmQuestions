/**
 * 
 * 错误点：
 *     dfs 里面 return 0
 *     主函数return时考虑 area.length === 0 的情况
 */


const dfs = (grid, i, j, rows, cols) => {
  if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === 0) return 0

  grid[i][j] = 0
  let ans = 1
  
  ans += dfs(grid, i-1, j, rows, cols)
  ans += dfs(grid, i+1, j, rows, cols)
  ans += dfs(grid, i, j-1, rows, cols)
  ans += dfs(grid, i, j+1, rows, cols)

  return ans
}

var maxAreaOfIsland = function(grid) {
  const rows = grid.length
  const cols = grid[0].length
  let area = []
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === 1) {
              area.push(dfs(grid, i, j, rows, cols))
          }
      }
  }
  return area.length > 0 ? Math.max(...area) : 0
};