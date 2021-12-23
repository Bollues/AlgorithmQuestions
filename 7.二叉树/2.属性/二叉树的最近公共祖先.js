/**
 * 1. 求最小公共祖先，需要从底向上遍历，那么二叉树，只能通过后序遍历（即：回溯）实现从低向上的遍历方式。
 * 2. 在回溯的过程中，必然要遍历整颗二叉树，即使已经找到结果了，依然要把其他节点遍历完，因为要使用递归函数的返回值（也就是代码中的left和right）做逻辑判断。
 * 3. 要理解如果返回值left为空，right不为空为什么要返回right，为什么可以用返回right传给上一层结果。
 */

// 参考：https://programmercarl.com/0236.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html#go
var lowestCommonAncestor = function (root, node1, node2) {
  return dfs(root)

  function dfs(r) {
    if (!r || r === node1 || r === node2) return r

    let left = dfs(r.left)
    let right = dfs(r.right)

    if (right !== null && left !== null) return r

    if (left === null) return right
    return left
  }
};

// 参考：https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/solution/er-cha-shu-de-zui-jin-gong-gong-zu-xian-by-leetc-2/
var lowestCommonAncestor = function (root, node1, node2) {
  let res
  dfs(root)
  return res

  function dfs (r) {
    if (!r) return false

    const left = dfs (r.left)
    const right = dfs (r.right)

    if ( (left && right) || ((r.val === node1.val || r.val === node2.val) && (left || right)) ) res = root

    return left || right || (r.val === node1.val || r.val === node2.val)
  }
}