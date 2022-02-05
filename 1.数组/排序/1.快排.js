/**
 * 递归 + 额外空间
 */
var sortArray = function (arr) {
    let pivot = arr[0]
    let left = []
    let right = []

    if (arr.length < 2) return arr

    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }

    return sortArray(left).concat([pivot], sortArray(right))
};


/**
 * 递归 + 交换
 */
var sortArray = function (nums, start = 0, end = nums.length - 1, left = start, right = end, pivot = nums[start]) {
    if (start > end) return
    while (left < right) {
        while (left < right && nums[right] >= pivot) right--
        while (left < right && nums[left] <= pivot) left++
        [nums[left], nums[right]] = [nums[right], nums[left]]
    }
    [nums[left], nums[start]] = [nums[start], nums[left]]
    sortArray(nums, start, left - 1)
    sortArray(nums, left + 1, end)
    return nums
}

/**
 * 非递归
 */
function sortArray (nums, left = 0, right = nums.length - 1) {
    let arr = [[left, right]]       // 存储左右指针的数组
    while (arr.length > 0) {
        const cur = arr.pop()
        if (cur[0] >= cur[1]) continue      // 左右指针相遇
        let start = cur[0], end = cur[1]
        let pivot = cur[0]
        while (start < end) {
            const p = nums[pivot]
            while (nums[end] >= p && end > pivot) end -= 1      // 在pivot右边找到比nums[pivot]小的数
            if (start >= end) break
            while (nums[start] <= p && start < end) start += 1;     // 在end左边找到比nums[pivot]大的数
            [nums[pivot], nums[end]] = [nums[end], nums[pivot]];
            pivot = start;           // start 左边都比nums[pivot]小，故start作为新pivot
        }
        arr.push([cur[0], pivot - 1])
        arr.push([pivot + 1, cur[1]])
    }
    return nums
}

console.log(sortArray([2, 0, 2, 1, 1, 0, 43, 223, 11, 33, 33, 8, -1]));