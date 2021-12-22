/**
 * 顺时针打印
 * 难点在翻转矩阵
 */

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []
  let out = []
  while (1) {
    out.push(...matrix[0])
    matrix.shift()
    if (matrix.length === 0) return out
    matrix = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]))
    matrix.reverse()
  }
};

/**
 * 逆时针打印
 */
var CounterclockwiseOrder = function (matrix) {
  if (matrix.length === 0) return []
  let out = []
  while (1) {
    for (let i = 0; i < matrix.length; i++) {
      out.push(matrix[i][0])
      matrix[i].shift()
    }
    if (matrix.length === 0) return out
    matrix = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]))
    for (let i = 0; i < matrix.length; i++) {
      matrix[i].reverse()
    }
  }
};



console.log(spiralOrder(
  [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
))
