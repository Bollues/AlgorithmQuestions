/**
 * 
 * 传入参数 path root
 * 什么时候开始递归、终止递归
 */

var sumNumbers = function(root) {
    sum = 0
    const dfs = (path, root) => {
        path += root.val
        if (!root.left && !root.right) {
            sum += Number(path)
            return
        }
        if (root.left) {
            dfs(path,root.left)
        }
        if (root.right) {
            dfs(path,root.right)
        }
    }
    dfs('',root)
    return sum
};