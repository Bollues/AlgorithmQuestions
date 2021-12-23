var printNumbers = function (n) {
  let num = 0.1
  while (n > 0) {
    num *= 10
    n--
  }
  let res = []
  for (i = 1; i < num * 10; i++) res.push(i)
  return res
};