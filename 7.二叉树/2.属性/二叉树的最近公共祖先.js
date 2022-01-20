/**
 * 1. 求最小公共祖先，需要从底向上遍历，那么二叉树，只能通过后序遍历（即：回溯）实现从低向上的遍历方式。
 * 2. 在回溯的过程中，必然要遍历整颗二叉树，即使已经找到结果了，依然要把其他节点遍历完，因为要使用递归函数的返回值（也就是代码中的left和right）做逻辑判断。
 * 3. 要理解如果返回值left为空，right不为空为什么要返回right，为什么可以用返回right传给上一层结果。
 */

// 参考：https://programmercarl.com/0236.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html#go
var lowestCommonAncestor = function (root, node1, node2) {
  return dfs(root)

  function dfs(r) {
    if (!r || r === node1 || r === node2) return r    // 如果找到了就return r，没找到就return null，这样就能保证只要不是node1或node2，就return null

    let left = dfs(r.left)
    let right = dfs(r.right)

    if (right !== null && left !== null) return r   // 这个就是公共祖先，接下来就是把这个节点往上传

    if (left === null) return right     // 往上传
    return left       // 往上传
  }
};