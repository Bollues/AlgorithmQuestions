
/**
 * 递归
 * 时空 n n
 * 
 * 注意，不要return mid()
 */
var inorderTraversal = function (root) {
  let out = []

  const mid = (r) => {
    if (!r) return
    if (r.left) mid(r.left)
    out.push(r.val)
    if (r.right) mid(r.right)
  }

  mid(root)
  return out
};


/**
 * 非递归
 * 
 * 辅助栈
 */
var inorderTraversal = function (root) {
  let res = []
  let stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
};


/**
 * Morris 中序遍历
 * 时空 n 1
 *
 */