/**
 * 
 * 利用滚动数组优化空间  m*n -> Math.min(m, n)
 * 参考：https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/solution/zhe-yao-jie-shi-ken-ding-jiu-dong-liao-by-hyj8/
 */


const findLength = (A, B) => {
  const m = A.length;
  const n = B.length;
  const dp = new Array(n).fill(0);
  let res = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = n; j >= 1; j--) {
      dp[j] = (A[i - 1] == B[j - 1]) ? dp[j - 1] + 1 : 0;
      res = Math.max(dp[j], res);
    }
  }
  return res;
};


/**
 * 降维优化前
 */
//  var findLength = function(nums1, nums2) {
//   const n = nums1.length
//   const m = nums2.length
//   let dp = new Array(m + 1).fill(0)
//   let ans = 0

//   for (let i = 1; i <= n; i ++) {
//       for (let j = 1; j <= m; j ++) {
//           if (nums1[i - 1] === nums2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1
//           ans = Math.max(ans, dp[i][j])
//       }
//   }
//   return ans 
// };


console.log(findLength([1, 2, 3, 2, 1],
  [3, 2, 1, 4, 7]))