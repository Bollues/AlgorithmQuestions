/**
 * 滑动窗口 + set
 * 每次start右移从set中删除当前元素的前一个元素
 */


var lengthOfLongestSubstring = function(s) {
    let set = new Set()
    let end = 0
    let ans = 0
    for (let start = 0; start < s.length; start ++) {
        start > 0 && set.delete(s[start - 1])       // 每次右移删除当前元素的前一个元素
        while(end < s.length && !set.has(s[end])) {         // end 要小于 s.length，否则会加入undefined
            set.add(s[end])
            ans = Math.max(ans, set.size)
            end += 1
        }
    }
    return ans
};


// 95
console.log(lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ "))