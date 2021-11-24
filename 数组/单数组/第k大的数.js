/**
 * 快速选择
 * 
 * 将数组分成三部分：left, target, right
 * 如果 target 在左边，即 left.length > targetIndex
 *      - 在 left 中找 targetIndex
 * 如果 target 在右边，即 left.length < targetIndex
 *      - 在 right 中找 targetIndex - left.lenght - 1
 * 如果 target 正好就是当前 pivot
 *      - 直接返回 pivot
 */

var findKthLargest = function(nums, k) {
    const targetIndex = nums.length - k
    return quickSelect(nums, targetIndex)
};

const quickSelect = (arr, targetIndex) => {
    if (arr.length <= 1) return arr[0]
    let left = []
    let right = []
    const mid = Math.floor(arr.length / 2)
    let pivot = arr.splice(mid, 1)[0]

    for (item of arr) {
        if (item < pivot) left.push(item)
        else right.push(item)
    }

    if (left.length === targetIndex) return pivot
    else if (left.length > targetIndex) return quickSelect(left, targetIndex)
    else return quickSelect(right, targetIndex - left.length - 1)
}
