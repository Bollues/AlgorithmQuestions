/**
 * 参数：root、sum、path
 * 
 */

var pathSum = function(root, targetSum) {
  if (!root) return []
  let res = []
  dfs(root, targetSum, [])
  return res

  function dfs(r, sum, path) {
      let p = [...path]
      p.push(r.val)

      if (!r.left && !r.right) {
          if (sum === r.val) res.push(p)
          return 
      }
      if (r.left) dfs(r.left, sum - r.val, p)
      if (r.right) dfs(r.right, sum - r.val, p)
  }
};