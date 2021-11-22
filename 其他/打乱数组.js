/**
 * 
 * Math.random() * i | 0 等同于 Math.trunc(Math.random() * i)，作用是去掉小数部分，前者更快，因为是位运算
 * 
 * 错误点： forEach里面加括号
 */

var Solution = function(nums) {
  this.nums = nums
};

Solution.prototype.reset = function() {
  return this.nums
};

Solution.prototype.shuffle = function() {
  var nums = this.nums.slice()
  nums.forEach((_, i, a, j) => (j = Math.random() * a.length | 0, [a[i], a[j]] = [a[j], a[i]]))
  return nums
};
