/**
 * 递归
 * 
 * 注意点1：当到达叶子节点时，才判断总和
 * 注意点2：递归的结果通过 || 进行连接
 * 注意点3：由于递归时没有判断节点是否存在 left 和 right，所以每次进入递归时判断一下当前节点是否为空 
 */

var hasPathSum = function (root, targetSum) {
  if (!root) return false
  else if (!root.left && !root.right) return root.val === targetSum
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};


var hasPathSum = function (root, targetSum) {
  if (!root) return false
  let sum = 0
  return dfs(root)

  function dfs(r) {
    sum += r.val
    if (!r.left && !r.right) {
      if (sum === targetSum) return true
      else {
        sum -= r.val
        return false
      }
    }
    let res
    if (r.left) {
      res = dfs(r.left)
    }
    if (r.right) {
      res = res || dfs(r.right)
    }
    sum -= r.val
    return res
  }
};