/**
 * 排序 + 双指针
 * 
 * nums1[p1] === nums2[p2]  =>  还要判断 当前数字 === res最后一个数字 ？
 * nums1[p1] > nums2[p2]  =>  p2++
 * nums1[p1] < nums2[p2]  =>  p1++
 */


var intersection = function(nums1, nums2) {
  nums1 = nums1.sort((a, b) => a-b)
  nums2 = nums2.sort((a, b) => a-b)
  let p1 = 0, p2 = 0
  res = []
  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      if (res.length === 0 || nums1[p1] !== res[res.length - 1]) {
        res.push(nums1[p1])
      } else {
        p1 ++
        p2 ++
      }
    }
    else if (nums1[p1] > nums2[p2]) p2 ++
    else p1 ++
  }
  return res
};