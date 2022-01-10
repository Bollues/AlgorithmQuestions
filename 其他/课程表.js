/**
 * 检查一个图是否是有向无环图
 * BFS
 * 入度数组：课号 0 到 n - 1 作为索引，通过遍历prerequisites求出对应的初始入度。
 * 邻接表：用哈希表记录依赖关系，key（课号）value（依赖这门课的后续课）
 */

const canFinish = (numCourses, prerequisites) => {
  const inDegree = new Array(numCourses).fill(0)    // 入度数组
  const map = {}        // 记录依赖关系

  // 求初始入度 和 初始化邻接表
  for (let i = 0; i < prerequisites.length; i++) {
    inDegree[prerequisites[i][0]]++    // 求初始入度
    if (map[prerequisites[i][1]]) {     // 初始化邻接表
      map[prerequisites[i][1]].push(prerequisites[i][0])
    } else {
      map[prerequisites[i][1]] = [prerequisites[i][0]]
    }
  }

  const queue = []    // BFS的辅助队列
  for (let i = 0; i < inDegree.length; i++) {     // 所有入度为0的课入列
    if (inDegree[i] === 0) queue.push(i)
  }

  let count = 0
  while (queue.length > 0) {
    const selected = queue.shift()
    count++
    const toQueue = map[selected]   // 获取这门课的后续课程
    if (toQueue && toQueue.length > 0) {
      for (let j = 0; j < toQueue.length; j++) {
        inDegree[toQueue[j]]--
        if (inDegree[toQueue[j]] === 0) {
          queue.push(toQueue[j])
        }
      }
    }

  }
  return count === numCourses
}

console.log(canFinish(6, [[3, 0], [3, 1], [4, 1], [4, 2], [5, 3], [5, 4]]))