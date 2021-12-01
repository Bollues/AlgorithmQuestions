/**
 * 
 * 通过双指针代替slice来优化
 * 把中序元素和索引存入哈希表，用空间换时间
 * 参考：https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/ding-wei-chu-gen-jie-dian-de-wei-zhi-hua-fen-zuo-y/
 */

// 优化后
const buildTree = (preorder, inorder) => {
  const map = new Map()
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i)
  }
  const helper = (p_start, p_end, i_start, i_end) => {
    if (p_start > p_end) return null
    let rootVal = preorder[p_start]    // 根节点的值
    let root = new TreeNode(rootVal)   // 根节点
    let mid = map.get(rootVal)         // 根节点在inorder的位置
    let leftNum = mid - i_start        // 左子树的节点数
    root.left = helper(p_start + 1, p_start + leftNum, i_start, mid - 1)
    root.right = helper(p_start + leftNum + 1, p_end, mid + 1, i_end)
    return root
  };
  return helper(0, preorder.length - 1, 0, inorder.length - 1)
}


// 优化前
// const buildTree = (preorder, midorder) => {
//   if (preorder.length < 1) return null
//   const root = new TreeNode(preorder[0])
//   const mid = midorder.indexOf(preorder[0])
//   root.left = buildTree(preorder.slice(1, mid + 1), midorder.slice(0, mid))
//   root.right = buildTree(preorder.slice(mid + 1), midorder.slice(mid + 1))
//   return root
// }

