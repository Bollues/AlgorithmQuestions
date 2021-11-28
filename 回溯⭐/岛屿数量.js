/**
 * 
 * 
 */

const dfs = (grid, i, j, rows, cols) => {
  if (i < 0 || j < 0 || i >= rows  || j >= cols || grid[i][j] === '0') return
  grid[i][j] = '0'

  dfs(grid, i-1, j, rows, cols)
  dfs(grid, i+1, j, rows, cols)
  dfs(grid, i, j-1, rows, cols)
  dfs(grid, i, j+1, rows, cols)
}

var numIslands = function(grid) {
  let res = 0
  const rows = grid.length
  const cols = grid[0].length
  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          if (grid[i][j] === '1') {
              dfs(grid, i, j, rows, cols)
              res ++
          }
      }
  }
  return res
};
