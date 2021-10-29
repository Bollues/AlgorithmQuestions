var addStrings = function(num1, num2) {
  let digit = 0
  let out = ''
  let length1 = num1.length - 1
  let length2 = num2.length - 1
  while (length1 >= 0 || length2 >= 0) {
      n1 = length1 >= 0 ? parseInt(num1.charAt(length1)) : 0
      n2 = length2 >= 0 ? parseInt(num2.charAt(length2)) : 0
      const sum = n1 + n2 + digit
      out += (sum % 10).toString()
      digit = Math.floor(sum / 10)
      length1 --
      length2 --
  }
  if (digit) {
      out += digit.toString()
  }
  return out.split('').reverse().join('')
};

console.log(addStrings('11', '123'))