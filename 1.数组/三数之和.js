/**
 * 3指针，第3个指针从后往前遍历
 */

var threeSum = function(nums) {
  const len = nums.length
  nums.sort((a, b) => a - b)
  let p3 = len - 1
  let ans = []

  for (let p1 = 0; p1 < len; p1++) {
      if (p1 !== 0 && nums[p1] === nums[p1 - 1]) continue   // 要确保前后两个i的值不同，否则会有重复解
      p3 = len - 1                                    // 必须重置
      for (let p2 = p1 + 1; p2 < len; p2++) {
          if (p2 !== p1 + 1 && nums[p2] === nums[p2 - 1]) continue      // 要确保前后两个i的值不同，否则会有重复解
          while ((nums[p1] + nums[p2] + nums[p3]) > 0) p3 -= 1
          if ((nums[p1] + nums[p2] + nums[p3]) === 0 && p2 < p3) ans.push([nums[p1], nums[p2], nums[p3]])       // p3有可能<= p2
      }
  }

  return ans
};

console.log(threeSum([0,0,0,0]))