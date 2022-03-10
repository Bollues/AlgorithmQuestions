/**
 * 自底向上（时间复杂度更小）
 * 不平衡就返回-1，平衡就返回树的深度
 * On On
 */

var isBalanced = function (root) {
  return balanced(root) !== -1
}

var balanced = (node) => {
  if (!node) return 0
  const left = balanced(node.left)
  const right = balanced(node.right)
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1
  return Math.max(left, right) + 1
}


/**
 * 自顶向下（更好理解）
 * 遍历每个节点，判断以该节点为root的话，左右节点是否平衡
 * On^2 On
 */
var isBalanced = function(root) {
  if (!root) return true
  return Math.abs(depth(root.left) - depth(root.right)) <= 1 
          && isBalanced(root.left) 
          && isBalanced(root.right)
};

var depth = (node) => {
  if (!node) return 0
  return 1 + Math.max(depth(node.left), depth(node.right))
}


