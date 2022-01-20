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


/**
 * 不用除法
 * 两次dp
 *    从前往后计算i前面的乘积
 *    从后往前计算i+1后面的乘积
 */
var constructArr = function (nums) {
  let res = new Array(nums.length).fill(1)
  let tmp = 1
  for (let i = 1; i < nums.length; i++) {     // 从前往后
    res[i] = res[i - 1] * nums[i - 1]
  }
  for (let i = nums.length - 2; i >= 0; i--) {     // 从后往前
    tmp *= nums[i + 1]
    res[i] *= tmp
  }
  return res
};