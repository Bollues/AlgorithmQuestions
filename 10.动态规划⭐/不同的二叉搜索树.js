/**
 * 遍历数字作为根结点，因为根节点不同，所以可以保证二叉树唯一
 * 有根节点后，可以分出左右1⋯(i−1) 序列作为左子树，将 (i+1)⋯n 序列作为右子树
 * 因此将大问题变成了一个个小问题
 * G[n] = G[0] * G[n-1] + G[1] * G[n-2] + ... (+ G[n/2] * G[n/2])
 */

var numTrees = function (n) {
  const G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
};

console.log(numTrees(5))
