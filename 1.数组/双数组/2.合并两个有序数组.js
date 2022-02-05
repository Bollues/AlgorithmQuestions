/**
 * 从后往前填槽
 */

var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1
  let p2 = n - 1
  let tail = m + n - 1
  let cur
  while (p1 >= 0 || p2 >= 0) {      // 直到双方遍历完
    if (p1 < 0) {     // nums1 遍历完了
      cur = nums2[p2]
      p2 --
    } else if (p2 < 0) {      // nums2 遍历完了
      cur = nums1[p1]
      p1 --
    } else if (nums1[p1] > nums2[p2]) {     // 谁大谁就是 cur
      cur = nums1[p1]
      p1 --
    } else {              // 谁大谁就是 cur
      cur = nums2[p2]
      p2 --
    }
    nums1[tail] = cur     // 把cur 放末尾
    tail --
  }
  
  return nums1
};

console.log(merge([4,5,6,0,0,0], 3, [1,2,3], 3))