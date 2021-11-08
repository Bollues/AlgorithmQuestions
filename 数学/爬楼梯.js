// 滚动数组

var climbStairs = function(n) {
  let a = b = 0
  let c = 1
  for (let i = 0; i < n; i++) {
    a = b
    b = c
    c = a + b
  }
  return c
};

console.log(climbStairs(45))