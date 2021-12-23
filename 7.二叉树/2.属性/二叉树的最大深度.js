/**
 * 最大深度
 */

var maxDepth = function (root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
};

// var maxDepth = function (root) {
//   if (!root) return 0
//   let tmpHeight = 1
//   let maxHeight = 1
//   dfs(root)
//   return maxHeight

//   function dfs(r) {
//     if (!r.left && !r.right) return
//     if (r.left) {
//       tmpHeight += 1
//       maxHeight = Math.max(maxHeight, tmpHeight)
//       dfs(r.left)
//       tmpHeight -= 1
//     }
//     if (r.right) {
//       tmpHeight += 1
//       maxHeight = Math.max(maxHeight, tmpHeight)
//       dfs(r.right)
//       tmpHeight -= 1
//     }
//   }
// };



/**
 * 最小深度
 */

var minDepth = function (root) {
  if (!root) return 0
  let tmpHeight = 1
  let minHeight = Infinity
  dfs(root)
  return minHeight

  function dfs(r) {
    if (!r.left && !r.right) {
      minHeight = Math.min(minHeight, tmpHeight)
      return
    }
    if (r.left) {
      tmpHeight += 1
      dfs(r.left)
      tmpHeight -= 1
    }
    if (r.right) {
      tmpHeight += 1
      dfs(r.right)
      tmpHeight -= 1
    }
  }
};