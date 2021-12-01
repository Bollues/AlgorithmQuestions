/**
 * 
 * 
 */


const backTrack = (board, i, j, n, m, word, index) => {
  if (i < 0 || j < 0 || i >= n || j >= m || board[i][j] !== word.charAt(index)) return false
  let tmp = board[i][j]     // 临时记录
  board[i][j] = ''      // 剪枝，防止重复访问
  if (index === word.length - 1) return true
  let res =  backTrack(board, i - 1, j, n, m, word, index + 1) ||
              backTrack(board, i + 1, j, n, m, word, index + 1) ||
              backTrack(board, i, j - 1, n, m, word, index + 1) ||
              backTrack(board, i, j + 1, n, m, word, index + 1)
  board[i][j] = tmp     // 恢复现场
  return res
}

var exist = function(board, word) {
  const n = board.length
  const m = board[0].length
  for (let i = 0; i < n; i ++) {
      for (let j = 0; j < m; j ++) {
          if (backTrack(board, i, j, n, m, word, 0)) return true
      }
  }
  return false
};
