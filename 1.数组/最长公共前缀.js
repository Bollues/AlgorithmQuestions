/**
 * 思路简单，主要考察代码能力
 */

// 纵向比较
var longestCommonPrefix = function (strs) {
    if (!strs[0]) return ''
    let res = ''
    let len = Infinity
    strs.map((item) => {
        len = Math.min(len, item.length)
    })
    for (let i = 0; i < len; i++) {
        let tmp = strs[0].charAt(i)
        for (let j = 0; j < strs.length; j++) {
            if (strs[j].charAt(i) !== tmp) return res
            if (strs[j].charAt(i) === tmp && j === strs.length - 1) res += tmp
        }
    }
    return strs.length === 1 ? strs[0] : res
};

// 横向比较
var longestCommonPrefix = function(strs) {
    if (!strs[0]) return ''
    let res = strs[0]
    let len = strs.length
    
    for (let i = 0; i < len - 1; i ++) {
        let pointer = 0
        while (res.charAt(pointer) === strs[i + 1].charAt(pointer) && res.charAt(pointer) && strs[i + 1].charAt(pointer)) pointer ++
        res = strs[i + 1].substr(0, pointer)
    }
    return strs.length === 1 ? strs[0] : res
};