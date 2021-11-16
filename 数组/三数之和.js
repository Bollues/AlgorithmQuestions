
var threeSum = function(nums) {
  if (nums.length < 3) return []
  
  const n = nums.length - 1
  let out = []
  nums.sort((a, b) => a - b)  // js中的sort是按照字符串排序的，所以25 > 100，因为2 > 1

  for (let i = 0; i < n; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) continue  // 要确保前后两个i的值不同，否则会有重复解
    let m = n  // 必须放在第一个 for循环 里面

    for (let j = i + 1; j < n; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue  // 要确保前后两个i的值不同，否则会有重复解

      while (nums[i] + nums[j] + nums[m] > 0 && m > j) m --
      if (nums[i] + nums[j] + nums[m] == 0 && j != m) out.push([nums[i], nums[j], nums[m]])   // 还要判断一次 j != m，是因为上一个循环的结果有可能使m == j

    }

  }
  return out
};

console.log(threeSum([0,0,0,0]))