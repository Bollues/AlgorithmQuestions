
/**
 * 递归
 * 时空 n n
 * 
 * 注意，不要return mid()
 */

var inorderTraversal = function(root) {
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
 * Morris 中序遍历
 * 时空 n 1
 * 
 */