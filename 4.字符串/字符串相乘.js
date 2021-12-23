

var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  
  let n = num1.length - 1, m = num2.length - 1, p = new Array(n + m + 2).fill(0)
  for (let i = n; i >= 0; i--) {
      for (let j = m; j >= 0; j--) {
          let tmp = num1[i] * num2[j] + p[i + j + 1]
          p[i + j + 1] = tmp % 10
          p[i + j] += 0 | tmp / 10
      } 
  }
  while(p[0] === 0) p.shift()

  return p.join('')
}