/**
 * 参数里的index代表树的深度，也就是输入字符串的第几位
 */


function letterCombinations(str) {
    if (str.length === 0) return []
    const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    let res = []
    let path = []
    backTrack(0)
    return res

    function backTrack(index) {
        if (path.length === str.length) {
            res.push([...path].join(''))
            return 
        }
        for (let letter of map[str[index]]) {
            path.push(letter)
            backTrack(index + 1)
            path.pop()
        }
    }
}

console.log(letterCombinations('23'))








