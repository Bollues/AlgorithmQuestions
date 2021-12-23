/**
 * 第一步：如果数组大小为零的话，说明是空节点了。
 * 
 * 第二步：如果不为空，那么取后序数组最后一个元素作为节点元素。
 * 
 * 第三步：找到后序数组最后一个元素在中序数组的位置，作为切割点
 * 
 * 第四步：切割中序数组，切成中序左数组和中序右数组 （顺序别搞反了，一定是先切中序数组）
 * 
 * 第五步：切割后序数组，切成后序左数组和后序右数组
 * 
 * 第六步：递归处理左区间和右区间
 */


var buildTree = function (inorder, postorder) {
  if (postorder.length === 0) return null       // 终止条件，后序数组长度为0，说明是空节点

  const rootVal = postorder.pop()               // 后序序列的最后一个节点就是父节点
  const root = new TreeNode(rootVal, null, null)

  const idx = inorder.indexOf(rootVal)          // 找到后序数组最后一个元素在中序数组的位置，作为切割点

  const leftMidTree = inorder.slice(0, idx)       // 切割中序数组，切成中序左数组和中序右数组 
  const rightMidTree = inorder.slice(idx + 1)
  const leftPostTree = postorder.slice(0, idx)    // 切割后序数组，切成后序左数组和后序右数组
  const rightPostTree = postorder.slice(idx)

  root.left = buildTree(leftMidTree, leftPostTree)        // 递归处理左区间和右区间
  root.right = buildTree(rightMidTree, rightPostTree)
  return root
}