/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历结果。如果是则返回 true，否则返回 false。假设输入的数组的任意两个数字都互不相同。
 * 考察二叉搜索树的性质
 */

var verifyPostorder = function (postorder) {
  let stack = []
  let root = Infinity
  for (let i = postorder.length - 1; i >= 0; i--) {
    if (postorder[i] > root) return false
    while (stack && postorder[i] < stack[stack.length - 1]) root = stack.pop()
    stack.push(postorder[i])
  }
  return true
}