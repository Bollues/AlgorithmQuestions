/**
 * 找到每个节点的左子树和右子树的最大深度
 * return max(left + right)
 */
var diameterOfBinaryTree = function (root) {
  let ans = 0
  dfs(root)
  return ans

  function dfs(r) {
    if (!r) return 0
    let left = dfs(r.left)
    let right = dfs(r.right)
    ans = Math.max(ans, left + right)
    return Math.max(left, right) + 1
  }
};