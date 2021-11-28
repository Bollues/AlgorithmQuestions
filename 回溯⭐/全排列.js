/**
 * 回溯
 * 
 * 回溯参数 已经用过的数字组 a_arr， 还没用过的数字组 b_arr
 */
 var permute = function(nums) {
    let res = []
    const dfs = (a_arr, b_arr) => {
        if (a_arr.length === nums.length) {
            res.push(a_arr)
            return
        }
        for(let i = 0; i < b_arr.length; i++) {
            let a = [...a_arr]
            let b = [...b_arr]
            a.push(b[i])
            b.splice(i, 1)
            dfs(a, b)
        }
    }
    dfs([], nums)
    return res
};


console.log(permute([1, 2, 3]))