/**
 * 此题求拼接起来的最小数字，本质上是一个排序问题。
 * 设数组 nums 中任意两数字的字符串为 x 和 y，则规定排序判断规则为：
 *    - if (x + y > y + x) ，则 x “大于” y
 *    - else if (x + y < y + x) ，则 x “小于” y
 */

// 快排
var minNumber = function (nums) {
  quickSort(0, nums.length - 1);
  return nums.join('')
  
  function quickSort(start, end) {
    if (start > end) return
    let left = start
    let right = end
    while (left < right) {
      while (left < right && Number('' + nums[right] + nums[start]) >= Number('' + nums[start] + nums[right])) right -= 1;
      while (left < right && Number('' + nums[left] + nums[start]) <= Number('' + nums[start] + nums[left])) left += 1;
      swap(left, right)
    }
    swap(left, start)
    quickSort(start, left - 1)
    quickSort(left + 1, end)
  }

  function swap(i, j){
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }
}

// 用api
var minNumber = function (nums) {
  return nums.sort((a, b) => ('' + a + b) - ('' + b + a)).join('')
};

// test
console.log(minNumber([1,2,3,1]))