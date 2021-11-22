/**
 * 
 * 
 */

var rightSideView = function(root) {
  if (!root) return []
  let queue = [root]
  let res = []
  while (queue.length > 0) {
      let len = queue.length
      while (len > 0) {
          let node = queue.shift()
          if (len === 1) res.push(node.val)       // 如果是最后一个元素，就加入解集
          if (node.left) queue.push(node.left)
          if (node.right) queue.push(node.right)
          len --
      }
  }
  return res
};