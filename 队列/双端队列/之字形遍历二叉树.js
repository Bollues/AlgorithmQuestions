
// 习惯写法
// return [[...]]
var zigzagLevelOrder = function (root) {
  if (!root) return null
  let biQueue = [root]
  let rightOrder = false
  let res = []

  while (biQueue.length > 0) {
    res.push([])

    for (let i = 0; i < biQueue.length; i++) {
      const node = biQueue.shift()
      res[res.length - 1].push(node.val)
      if (rightOrder) {       // 后插
        if (node.left) biQueue.push(node.left)
        if (node.right) biQueue.push(node.right)
        rightOrder = !rightOrder
      } else {                // 前插
        if (node.left) biQueue = [node.left, ...biQueue]
        if (node.right) biQueue = [node.right, ...biQueue]
        rightOrder = !rightOrder
      }
    }

  }
  return res
};

// 过leetcode的写法
// return [[], [...], [...]]
var zigzagLevelOrder = function(root) {
  if (!root) return []
  let queue = [root]
  let leftOrder = true
  let res = []

  while (queue.length > 0) {
      let biList = []
      const levelSize = queue.length
      for (let i = 0; i < levelSize; i ++) {
          const node = queue.shift()

          if (leftOrder) biList.push(node.val)        // 后插
          else biList.unshift(node.val)               // 前插

          if (node.left) queue.push(node.left)       
          if (node.right) queue.push(node.right)
      }
      res.push(biList)
      leftOrder = !leftOrder
  }
  return res
};
