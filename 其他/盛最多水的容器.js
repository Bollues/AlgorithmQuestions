var maxArea = function(height) {
  let start = 0
  let end = height.length - 1
  let max = 0
  while (start < end) {
      max = Math.max(max, Math.min(height[start], height[end]) * (end - start))
      // 能想到双指针，但是计算完max后指针怎么移动？
      // 正确答案是移动两头中数字小的那一个指针
      if (height[start] < height[end]) {start ++}
      else {end --}
  }
  return max
};


maxArea([1,2,3,4])
