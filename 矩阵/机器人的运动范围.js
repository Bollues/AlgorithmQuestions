var movingCount = function (n, m, k) {
  if (k === 0) return 1

  const directionArr = [      // 只需要遍历两个方向，右边和下面
    [1, 0],
    [0, 1],
  ]

  let visited = new Set(['0,0'])

  let queue = [[0, 0]]

  while (queue.length) {    // 遍历队列中的坐标
    let [x, y] = queue.shift();   // 移除队首坐标

    // 遍历方向
    for (let i = 0; i < 2; i++) {
      let offsetX = x + directionArr[i][0];
      let offsetY = y + directionArr[i][1];

      // 临界值判断
      if (offsetX < 0 || offsetX >= m || offsetY < 0 || offsetY >= n || getSum(offsetX) + getSum(offsetY) > k || visited.has(`${offsetX},${offsetY}`)) {
        continue;
      }

      // 走过的格子就不再纳入统计
      visited.add(`${offsetX},${offsetY}`);

      // 将该坐标加入队列（因为这个坐标的四周没有走过，需要纳入下次的遍历）
      queue.push([offsetX, offsetY]);
    }
  }

  return visited.size   // 走过坐标的个数就是可以到达的格子数
};

function getSum(num) {
  let sum = 0
  num.toString().split('').forEach(item => sum += item * 1)
  return sum
}


console.log(movingCount(38, 15, 9))