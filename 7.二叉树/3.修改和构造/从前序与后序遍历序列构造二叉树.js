/**
 * 第一步：如果数组大小为零的话，说明是空节点了。
 * 
 * 第二步：如果不为空，那么取前序数组第一个元素作为节点元素。
 * 
 * 第三步⭐：前序节点的第一个节点就是后序节点的最后一个节点，所以取完前序数组第一个元素之后也要去掉后序数组最后一个元素 
 * 
 * 第四步：找到后序数组最后一个元素在前序数组的位置，作为切割点
 * 
 * 第五步：切割前序数组，切成前序左数组和前序右数组
 * 
 * 第六步：切割后序数组，切成中序左数组和中序右数组
 * 
 * 第七步：递归处理左区间和右区间
 */

var constructFromPrePost = function(pre, post) {
  if(pre.length==0) return null
  
  let root = new TreeNode(pre.shift())

  post.pop()

  let idx = pre.indexOf(post[post.length-1])

  const preLeftTree = pre.slice(0, idx)
  const preRightTree = pre.slice(idx)
  const postLeftTree = post.slice(0, idx)
  const postRightTree = post.slice(idx)

  root.left = constructFromPrePost(preLeftTree, postLeftTree)
  root.right = constructFromPrePost(preRightTree, postRightTree)

  return root
}