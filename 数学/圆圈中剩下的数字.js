/**
 * 约瑟夫环
 * 
 * 直接背
 */


var lastRemaining = function (n, m) {
  let f = 0
  for (let i = 2; i != n + 1; i++) {
    f = (m + f) % i
  }
  return f
};

console.log(lastRemaining(10, 3))