/**
 * 参考：https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/solution/teng-xun-leetcode230er-cha-sou-suo-shu-zhong-di-kx/
 * 
 */

// 递归
var kthSmallest = function (root, k) {
  let res
  const mid = (r) => {
    if (r.left) mid(r.left)
    if (--k === 0) {
      res = r.val
      return
    }
    if (r.right) mid(r.right)
  }
  mid(root)
  return res
};

// 非递归
var kthSmallest = function (root, k) {
  let stack = []
  while (root || stack.length) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    if (--k === 0) return root.val
    root = root.right
  }
  return null
};
