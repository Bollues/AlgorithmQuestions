/**
 * 不看第0行和第0列，遍历其他元素
 * 如果元素值是0：直接过
 * 如果元素值是1：matrix[i][j] = min(左边、左上、上面) + 1
 * 一次遍历完后得到正方形的边长
 * 最后return 边长的平方
 */
var maximalSquare = function (matrix) {
  const row = matrix.length
  const col = matrix[0].length
  let ans = 0

  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === '1') {
      ans = 1
      break
    }
  }
  for (let j = 0; j < col; j++) {
    if (matrix[0][j] === '1') {
      ans = 1
      break
    }
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] === '1') {
        matrix[i][j] = Math.min(matrix[i - 1][j] * 1, matrix[i][j - 1] * 1, matrix[i - 1][j - 1] * 1) + 1
        ans = Math.max(ans, matrix[i][j])
      }
    }
  }

  return ans * ans
};