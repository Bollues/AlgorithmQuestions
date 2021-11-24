/**
 * 方阵
 * 
 */

// 使用辅助矩阵
var rotate = function (matrix) {
  let n = matrix.length, m = JSON.parse(JSON.stringify(matrix))
  for (let i = n; i--;) 
      for (let j = n; j--;) 
          matrix[i][j] = m[n - 1 - j][i]
}

// 使用辅助队列
var rotate = function(matrix) {
  let n = matrix.length, queue = []
 for(let i = 0; i < n; i++) 
      for(let j = 0; j < n; j++) 
          queue.push(matrix[i][j])
  for(let j = n - 1; j >= 0; j--) 
      for(let i = 0; i < n; i++) 
          matrix[i][j] = queue.shift()
}


// 原地操作
var rotate = function(matrix) {
  const n = matrix.length
  // 水平翻转
  for (let i = 0; i < Math.floor(n / 2); i++) {
      for (let j = 0; j < n; j++) {
          [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]]
      }
  }
  // 主对角线翻转
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
          [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
      }
  }
}
