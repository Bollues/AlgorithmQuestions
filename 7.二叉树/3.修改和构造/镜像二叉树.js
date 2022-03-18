/**
 * 
 */

// 易懂版
var invertTree = function(root) {
  if (!root) return null
  if (root.left) invertTree(root.left)
  if (root.right) invertTree(root.right)
  exchange(root)    // 交换左右子树
  return root

  function exchange(r) {
    let tmp = r.left
    r.left = r.right
    r.right = tmp
    return r
  }
};

// 简洁版
var invertTree = function(root) {
  if (!root) return null
  const left = invertTree(root.left)
  const right = invertTree(root.right)
  root.right =left
  root.left = right
  return root
}