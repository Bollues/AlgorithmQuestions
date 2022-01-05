var sortArray = function(nums) {
    return quickSort(nums)

    function quickSort(arr) {
        if (arr.length <= 1) return arr
        let left = []
        let right = []
        const mid = Math.floor(arr.length / 2)
        const pivot = arr.splice(mid, 1)[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) left.push(arr[i])
            else right.push(arr[i])
        }
        return quickSort(left).concat(pivot, quickSort(right))
    }
    
};


console.log(sortArray([2,0,2,1,1,0]));