/**
 * 简洁版、易懂版
 */

// 易懂版
const exchange = (r) => {
  let tmp = r.left
  r.left = r.right
  r.right = tmp
  return r
}

var invertTree = function(root) {
  if (!root) return null
  if (root.left) invertTree(root.left)
  if (root.right) invertTree(root.right)
  exchange(root)
  return root
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