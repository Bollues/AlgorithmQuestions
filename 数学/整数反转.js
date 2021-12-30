/**
 * 每次从末尾取一位数字放在res的开头
 */
var reverse = function (x) {
  let res = 0
  let digit
  while (x !== 0) {
    digit = x % 10
    x = ~~(x / 10)
    res = res * 10 + digit
  }
  if (res < -2_147_483_647 || res > 2_147_483_648) return 0
  return res
};

console.log(reverse(123))


/**
 * 转成字符串再转回去
 */
// var reverse = function (x) {
//   let flag = false
//   if (x < 0) {
//     flag = true
//     x = x * -1
//   }
//   let str = (x + '').split('').reverse().join('')
//   while (str[0] === '0') {
//     str = str.substr(1)
//   }
//   if (str * 1 < -2_147_483_647 || str * 1 > 2_147_483_648) return 0
//   return flag ? str * -1 : str * 1
// };