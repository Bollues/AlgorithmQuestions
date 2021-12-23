/**
 * return [[...],[...],[...]]
 */
var levelOrder = function(root) {
  if (!root) return []
  let queue = [root]
  let res = []
  while (queue.length > 0) {
      let levelList = []
      const curLevelLength = queue.length
      for (let i = 0; i < curLevelLength; i ++) {
          const node = queue.shift()
          levelList.push(node.val)
          if (node.children) queue.push(...node.children)   // 只有这里变了
      }
      res.push(levelList)
  }
  return res
};