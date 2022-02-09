/**
 * 除2取余法
 */

var hammingWeight = function (n) {
  let res = 0
  while (n > 0) {
    if ((n % 2) === 1) {
      n--
      res++
    }
    n = n / 2
  }
  return res
};