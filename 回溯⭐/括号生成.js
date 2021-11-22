/**
 * 秒懂：https://leetcode-cn.com/problems/generate-parentheses/solution/shou-hua-tu-jie-gua-hao-sheng-cheng-hui-su-suan-fa/
 * 两个要点：
 *    - 约束条件：每次加入str的是 '(' 还是 ')' ？什么时候选择左括号？什么时候选择右括号？
 *    - 递归终止条件：当str的长度是2n时，结束一次递归
 */

var generateParenthesis = function (n) {
  let res = []
  const generate = (leftRemain, rightRemain, str) => {
    if (str.length === 2 * n) {   // 递归终止条件
      res.push(str)
      return
    }
    // 只要左括号还剩，就能选择
    if (leftRemain > 0) generate(leftRemain - 1, rightRemain, str + '(')
    // 只要右括号的数量 > 左括号的数量，就能选择
    if (rightRemain > leftRemain) generate(leftRemain, rightRemain - 1, str + ')')
  }
  generate(n, n, '')
  return res
}

console.log(generateParenthesis(2))