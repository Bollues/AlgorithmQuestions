/**
 * 数组中零的数量：
 *    - 0
 *        非零数乘积 / 当前数
 *    - 1
 *        - 当前数为零
 *            return 非零数乘积
 *        - 当前数不为零
 *            return 0
 *    - 大于1
 *        return 全0
 */
var productExceptSelf = function (nums) {
  let allProduct = 1      // 所有非零数乘积
  let zeroNum = 0         // 零的数量，超过1则return全零
  nums.forEach(num => {
    if (num === 0) zeroNum += 1
    else allProduct *= num
  })
  if (zeroNum > 1) {
    return nums.map(_ => 0)
  } else if (zeroNum === 1) {
    return nums.map(item => item === 0 ? allProduct : 0)
  } else {
    return nums.map(item => allProduct / item)
  }
};