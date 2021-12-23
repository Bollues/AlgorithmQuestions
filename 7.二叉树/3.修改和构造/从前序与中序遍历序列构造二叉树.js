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


/**
 * 优化前
 * 
 * 第一步：如果数组大小为零的话，说明是空节点了。
 * 
 * 第二步：如果不为空，那么取前序数组第一个元素作为节点元素。
 * 
 * 第三步：找到前序数组第一个元素在中序数组的位置，作为切割点
 * 
 * 第四步：切割中序数组，切成中序左数组和中序右数组 （顺序别搞反了，一定是先切中序数组）
 * 
 * 第五步：切割前序数组，切成前序左数组和前序右数组
 * 
 * 第六步：递归处理左区间和右区间
 */

 var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null

  const rootVal = preorder.shift()
  const root = new TreeNode(rootVal, null, null)

  const idx = inorder.indexOf(rootVal)

  const preLeftTree = preorder.slice(0, idx)
  const preRightTree = preorder.slice(idx)
  const midLeftTree = inorder.slice(0, idx)
  const midRightTree = inorder.slice(idx + 1)

  root.left = buildTree(preLeftTree, midLeftTree)
  root.right = buildTree(preRightTree, midRightTree)

  return root
};

