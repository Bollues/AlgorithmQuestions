/**
 * dfs
 */


var pathSum = function(root, target) {
  if (!root) return []
  let path = []
  let sum = 0
  let res = []
  dfs (root)
  return res

  function dfs (r) {
      path.push(r.val)
      sum += r.val
      if (!r.left && !r.right) {
          if (sum === target) res.push([...path])
          return 
      }
      if (r.left) {
          dfs(r.left)
          sum -= path.pop()
      }
      if (r.right) {
          dfs(r.right)
          sum -= path.pop()
      }
  }
};