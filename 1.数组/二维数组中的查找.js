/**
 * 从左下角开始，向右向上查找
 * 
 */

var findNumberIn2DArray = function (matrix, target) {
  if (!matrix.length) return false
  let rows = matrix.length - 1
  let cols = 0
  while (rows >= 0 && cols < matrix[0].length) {
    if (matrix[rows][cols] < target) cols ++
    else if (matrix[rows][cols] > target) rows --
    else return true
  }
  return false
}