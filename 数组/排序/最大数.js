/**
 * 难点在排序，需要比较两个数不同的拼接顺序的结果，进而决定它们在结果中的排列顺序
 * 
 */

var largestNumber = function(nums) {
  const res = nums.sort((a, b) =>  (b + '' + a) - (a + '' + b)).join('')
  return res.startsWith('0') ? '0' : res
}
