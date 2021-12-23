/**
 * 如果对称，满足以下条件：
 *    - r.left === r.right
 * 满足其一即不对称：
 *    - r.left !== r.right
 *    - r.left === null && r.right !== null
 *    - r.right === null && r.left !== null
 */

 var isSymmetric = function(root) {
  if (!root) return true
  return helper(root.left, root.right)
};

function helper(r1, r2) {
  if (r1 === null && r2 === null) return true
  if (!r1 || !r2 ||r1.val !== r2.val) return false
  return helper(r1.left, r2.right) && helper(r1.right, r2.left)
}