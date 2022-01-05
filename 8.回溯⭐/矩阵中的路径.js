/**
 * 
 * 
 */


var exist = function (board, word) {
  const row = board.length
  const col = board[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (backTrack(i, j, 0)) return true
    }
  }
  return false

  function backTrack(i, j, index) {
    if (i < 0 || j < 0 || i >= row || j >= col || board[i][j] !== word.charAt(index)) return false
    let tmp = board[i][j]     // 临时记录
    board[i][j] = ''      // 剪枝，防止重复访问
    if (index === word.length - 1) return true
    let res = backTrack(i - 1, j, index + 1) ||
      backTrack(i + 1, j, index + 1) ||
      backTrack(i, j - 1, index + 1) ||
      backTrack(i, j + 1, index + 1)
    board[i][j] = tmp     // 恢复现场
    return res
  }
};