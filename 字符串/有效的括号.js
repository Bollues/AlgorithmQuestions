/**
 * 栈
 * 
 * 注意点1：s的长度一定为偶数
 * 注意点2：入 ')' 时栈顶一定是 '(' 其他符号同理
 */

var isValid = function(s) {
  // s的长度一定为偶数
  if (s.length % 2 === 1) return false;
  
  let stack = []
  for (item of s) {
      if (item === ')') {
          if (stack.pop() !== '(') return false
      } else if (item === '}') {
          if (stack.pop() !== '{') return false
      } else if (item === ']') {
          if (stack.pop() !== '[') return false
      } else {
          stack.push(item)
      }
  }
  return stack.length === 0
};

console.log(isValid('([)]'))