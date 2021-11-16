/**
 * 每次取第一行，然后翻转矩阵
 * 
 * 难点在翻转矩阵
 */

var spiralOrder = function(matrix) {
  let len = matrix.length * matrix[0].length
  let out = []
  while (1) {
      out.push(...matrix[0])
      if (out.length === len) return out
      matrix.splice(0, 1)
      // 转置矩阵
      matrix = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]))
      matrix.reverse()
  }
};

console.log(spiralOrder(
  [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
))
