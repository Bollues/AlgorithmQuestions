/**
 * 回溯
 * 
 * 传入参数 当前深度d 当前结点r
 */

var maxDepth = function(root) {
  if (!root) return 0
  let depth = 0
  const dfs = (d, r) => {
      d ++
      if (!r.left && !r.right) depth = Math.max(depth, d)
      if (r.left) dfs(d, r.left)
      if (r.right) dfs(d, r.right)
  }
  dfs(depth, root)
  return depth
};