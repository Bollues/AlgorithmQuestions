/**
 * 二维dp
 * dp[i][j]记录以当前字母结尾的话最长公共子序列的长度
 */


var longestCommonSubsequence = function (text1, text2) {
    const n = text1.length
    const m = text2.length
    let dp = new Array(n + 1)
    for (let i = 0; i < dp.length; i++) dp[i] = new Array(m + 1).fill(0)

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (text1.charAt(i - 1) === text2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[n][m]
};