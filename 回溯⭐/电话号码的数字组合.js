/**
 * 
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return []
    const mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }
    let ans = []
    const backTrack = (used, remain, res) => {
        if (remain.length === 0) {
            ans.push(res)
            return
        }
        const token = remain.charAt(0)
        used += token
        remain = remain.substr(1)
        for (item of mapping[token]) {
            backTrack(used, remain, res + item)

        }
    }
    backTrack([], digits, '')
    return ans
};