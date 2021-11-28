/**
 * 
 * 回溯参数 r、num
 * 什么时候开始递归、终止递归
 */

 var sumNumbers = function(root) {
    let ans = 0
    backTrack(root, 0)
    return ans

    function backTrack(r, num) {
        num = num * 10 + r.val
        if (!r.left && !r.right) ans += num
        if (r.left) backTrack(r.left, num)
        if (r.right) backTrack(r.right, num)
    }
};