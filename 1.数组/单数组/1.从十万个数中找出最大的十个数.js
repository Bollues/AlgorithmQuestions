/**
 * 维护大小为10的小根堆，遍历99990，如果比堆顶大，就替换，并调堆，最终堆里剩下的就是最大的10个数
 */

function find(nums) {
  const arr = nums.slice(0, 10)

  function adjustHeap(idx, size = 10) {
    while(true) {
      let left = idx * 2 + 1
      let right = idx * 2 + 2
      let min = idx
      if (left < size && arr[left] < arr[min]) min = left
      if (right < size && arr[right] < arr[min]) min = right
      if (min !== idx) {
        [arr[idx], arr[min]] = [arr[min], arr[idx]]
        idx = min
      } else break
    }
  }

  function buildHeap() {
    let start = parseInt(arr.length / 2) + 1
    for (let i = start; i >= 0; i--) {
      adjustHeap(i)
    }
  }

  buildHeap()

  for (let i = 10; i < nums.length; i++) {
    if (nums[i] > arr[0]) {
      arr[0] = nums[i];
      adjustHeap(0)
    }
  }

  return arr
}

console.log(find([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]));