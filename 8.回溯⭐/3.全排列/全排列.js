/**
 * 不同于组合或子集问题，排列是有序的，所以[1, 2]和[2, 1]是两个集合，因此不能用index记录了
 * 对于排列问题，需要used数组
 */
 var permute = function(nums) {
    let res = []
    backTrack([], nums)
    return res

    function backTrack (used, unused) {
        if (used.length === nums.length) {
            res.push([...used])
            return 
        }
        for (let i = 0; i < unused.length; i++) {
            const arr2 = [...unused]
            const num = arr2.splice(i, 1)
            const arr1 = [...used, num]
            backTrack(arr1, arr2)
        }
    }
};

// var permute = function(nums) {
//     const res = [], path = [];
//     backtracking([]);
//     return res;
    
//     function backtracking(used) {
//         if(path.length === nums.length) {
//             res.push(Array.from(path));
//             return;
//         }
//         for (let i = 0; i < nums.length; i++ ) {
//             if(used[i]) continue;
//             path.push(nums[i]);
//             used[i] = true;
//             backtracking(used);
//             path.pop();
//             used[i] = false;
//         }
//     }
// };


console.log(permute([1, 2, 3]))