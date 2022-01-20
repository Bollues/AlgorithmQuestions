/**
 * 递归
 */
var sumNums = function (n) {
  return n && n + sumNums(n - 1)
};

/**
 * 运用对数，将乘法变为加法，除法变成减法，通过公式 n(n + 1) / 2 计算
 * 对数和幂运算有浮点误差，最终通过取整消除误差。
 */
var sumNums = function (n) {
  return Math.round(Math.exp(Math.log(n) + Math.log(n + 1) - Math.log(2)));
};

/**
 * 幂运算加移位，通过公式 n(n + 1) / 2 计算
 */
var sumNums = function (n) {
  return (n ** 2 + n) >> 1;
};