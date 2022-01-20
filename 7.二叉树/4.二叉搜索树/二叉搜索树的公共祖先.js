/**
 * 1. 从根节点开始遍历
 * 2. 如果当前节点的值大于 node1 和 node2 的值，说明 node1 和 node2 应该在当前节点的左子树，因此将当前节点移动到它的左子节点
 * 3. 如果当前节点的值小于 node1 和 node2 的值，说明 node1 和 node2 应该在当前节点的右子树，因此将当前节点移动到它的右子节点
 * 4. 如果当前节点的值不满足上述两条要求，那么说明当前节点就是「分岔点」。此时，node1 和 node2 要么在当前节点的不同的子树中，要么其中一个就是当前节点
 */

var lowestCommonAncestor = function(root, node1, node2) {
  while (root) {
      if (root.val > node1.val && root.val > node2.val) {         // 去左子树找
          root = root.left
      }
      else if (root.val < node1.val && root.val < node2.val) {            // 去右子树找
          root = root.right
      } else {
          return root
      }
  }
};