/**
 * 滑动窗口
 * 
 * 注意点1：左指针从0遍历到n-1
 * 注意点2：左指针每遍历一次，就删除前一个左指针
 * 注意点3：右指针负责找最大无重复子串长度
 * 注意点4：当右指针发现有重复字符出现了，其实length已经加上了那个重复字符，所以要在右指针++之前记录最大长度
 * 注意点5：用set.has()判断是否出现重复字符
 * 注意点6：如果s非空而最大长度为0，说明全是重复的，返回1
 */

var lengthOfLongestSubstring = function (s) {
    let res = 0
    let set = new Set()
    let pEnd = 0
    for (let pStart = 0; pStart < s.length; pStart++) {
        // 每次右移删除当前元素的前一个元素
        if (pStart > 0) set.delete(s.charAt(pStart - 1))        

        // end指针右移，判断最长不重复子串
        while (pEnd < s.length && !set.has(s.charAt(pEnd))) {
            set.add(s.charAt(pEnd))
            pEnd += 1
            res = Math.max(res, pEnd - pStart)
        }
    }
    return res
};


// 95
console.log(lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~ "))