/**
 * 思路简单，主要考察代码能力
 */

var longestCommonPrefix = function (strs) {
    let res = ''
    let len = strs.length
    let p = 0

    while (1) {
        if (p >= strs[0].length) return res
        const tmp = strs[0].charAt(p)
        for (let i = 1; i < len; i++) {
            if (strs[i].charAt(p) !== tmp) return res
        }
        res += tmp
        p += 1
    }
};