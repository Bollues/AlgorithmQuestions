/**
 * 方法1：排序完返回前k个
 * 方法2：利用快排的思想，每次选出一个pivot和左右数组，左边数组全 > pivot，右边数组全 < pivot，
 *    然后判断pivot是否等于 k - 1，
 *    小了就start往后移，移到index + 1，
 *    大了就end往前移，移到index - 1，
 *    只要 pivot === k-1，就返回 arr 的前k个
 */

var getLeastNumbers = function (arr, k) {
  let len = arr.length
  if (!len || !k) return []
  let start = 0
  let end = len - 1
  // 寻找一次标杆元素的位置
  let index = quikSort(arr, start, end)
  // 如果标杆元素的位置不等于 K
  while (index !== k - 1) {
    console.log(index, arr)
    if (index > k - 1) {      // 如果上一次查找，标杆元素位置大于目标位置
      end = index - 1
      index = quikSort(arr, start, end)
    } else {              // 如果上一次查找，标杆元素位置小于目标位置
      start = index + 1
      index = quikSort(arr, start, end)
    }
  }
  return arr.slice(0, index + 1)
};

function quikSort(arr, left, right) {
  let pivot = arr[left]
  while (left < right) {
    while (left < right && arr[right] >= pivot) right--
    arr[left] = arr[right]
    while (left < right && arr[left] < pivot) left++
    arr[right] = arr[left]
  }
  arr[left] = pivot
  return left
}

console.log(getLeastNumbers([0,0,1,2,4,2,2,3,1,4], 8))
