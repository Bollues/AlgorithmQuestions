var sortArray = function(nums) {
    const quickSort = (arr) => {
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
    sorted = quickSort(nums)
    return sorted
};


console.log(sortArray([3,2,3,1,2,4,5,5,6]));