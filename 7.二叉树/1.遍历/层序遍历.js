/**
 * 简洁版
 * return [...] 没有null
 */
var levelOrder = function(root) {
    if (!root) return []
    let line = [root]
    let res = []
    while (line.length > 0) {
        let node = line.shift()
        res.push(node)
        if (node.left) line.push(node.left)
        if (node.right) line.push(node.right)
    }
    return res
};

/**
 * 能过leetcode的版本
 * return [[...],[...],[...]]
 */
var levelOrder = function(root) {
    const res = []
    if (!root) return res

    const q = [root]
    while (q.length > 0) {
        const currentLevelSize = q.length
        res.push([])
        for (let i = 0; i < currentLevelSize; ++i) {
            const node = q.shift()
            res[res.length - 1].push(node.val)
            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
    }
    return res
};
