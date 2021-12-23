var preorderTraversal = function(root) {
  let res = []
  const dfs = (r) => {
      if (!r) return
      res.push(r.val)
      if (r.left) dfs(r.left)
      if (r.right) dfs(r.right)
  }
  dfs(root)
  return res
};