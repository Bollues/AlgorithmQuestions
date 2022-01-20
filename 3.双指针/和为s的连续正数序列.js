/**
 * 暴力枚举
 */
var findContinuousSequence = function (target) {
  const len = Math.floor(target / 2) + 1
  let res = []
  for (let i = 1; i <= len; i++) {
    let tmp = [i]
    let sum = i
    for (let j = i + 1; j <= len; j++) {
      sum += j
      tmp.push(j)
      if (sum === target) {
        res.push(tmp)
        break
      } else if (sum > target) break
    }
  }
  return res
};

/**
 * 滑动窗口
 */
var findContinuousSequence = function (target) {
  let left = 1
  let right = 2
  let sum = 3
  let res = []
  while (left < right) {
    if (sum === target) {
      let tmp = []
      for (let i = left; i <= right; i++) tmp.push(i)
      res.push(tmp)

      sum -= left     // 继续滑动窗口
      left += 1
    } else if (sum > target) {    // 缩小窗口
      sum -= left
      left += 1
    } else {      // 扩大窗口
      right += 1
      sum += right
    }
  }
  return res
}