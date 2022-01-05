/**
 * 中序遍历
 */
var isValidBST = function (root) {
  let res = []
  mid(root)
  for (let i = 1; i < res.length; i++) {
    if (res[i] <= res[i - 1]) return false
  }
  return true

  function mid(r) {
    if (!r) return
    if (r.left) mid(r.left)
    res.push(r.val)
    if (r.right) mid(r.right)
  }
};