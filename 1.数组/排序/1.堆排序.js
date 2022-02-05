/**
 * 用数组（从0开始）来存完全二叉树
 * 对于非叶节点i，其左节点为2*i+1，右节点为2*i+2
 */

var heapSort = function (nums) {

  function adjustHeap(idx, size) {
    while (true) {
      let max = idx
      let left = idx * 2 + 1
      let right = idx * 2 + 2
      if (left < size && nums[max] < nums[left]) max = left
      if (right < size && nums[max] < nums[right]) max = right

      if (idx !== max) {    // 左右节点 > 父节点，则交换，交换完再进入循环判断堆结构是否被破坏
        [nums[idx], nums[max]] = [nums[max], nums[idx]]
        idx = max
      } else break    // 堆结构成立
    }
  }

  function buildHeap() {
    const start = parseInt(nums.length / 2) - 1   // 最后一个非叶节点
    const size = nums.length
    for (let i = start; i >= 0; i--) {      // 从最后一个非叶节点调整到堆顶
      adjustHeap(i, size)
    }
  }

  buildHeap()

  for (let i = nums.length - 1; i > 0; i--) {    // 交换堆顶和堆底元素并调堆
    [nums[i], nums[0]] = [nums[0], nums[i]]
    adjustHeap(0, i)
  }

  return nums
};


console.log(heapSort([3, 24, 56, 67, 25, 4, 77, 7, 8, 23, 1]));