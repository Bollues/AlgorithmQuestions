/**
 * 初始dp数组全是false
 * 从前往后遍历，遍历到i时：
 *    从i往前遍历，遍历到j时：
 *        如果dp[j]是true，就看s.substring(j + 1, i + 1)是不是在dict里，是的话dp[i]就是true
 *    极端情况下，s.substring(0, i + 1)在dict里，那么dp[i]就是true
 * 最后返回dp的最后一个值
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length).fill(false)
  for (let i = 0; i < s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (dp[j] === true && wordDict.includes(s.substring(j + 1, i + 1))) {
        dp[i] = true
      }
    }
    if (wordDict.includes(s.substring(0, i + 1))) dp[i] = true
  }
  return dp[dp.length - 1]
};

/**
 * 优化，剪枝
 * 可以记录dict中最长的单词的长度len
 * 在j从后往前遍历时，如果j - i 超过了len，那么直接pass
 */
var wordBreak = function (s, wordDict) {
  let len = 0                                                       // !new
  wordDict.forEach(word => len = Math.max(len, word.length))           // !new
  let dp = new Array(s.length).fill(false)
  for (let i = 0; i < s.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if ((j - i) > len) break                                       // !new
      if (dp[j] === true && wordDict.includes(s.substring(j + 1, i + 1))) {
        dp[i] = true
      }
    }
    if (wordDict.includes(s.substring(0, i + 1))) dp[i] = true
  }
  return dp[dp.length - 1]
};