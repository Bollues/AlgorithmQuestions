var threeSum = function(nums) {
  if (nums.length < 3) return []
  
  out = []
  // js中的sort是按照字符串排序的，所以25 > 100，因为2 > 1
  nums = nums.sort((a, b) => a - b)

  for (let first = 0; first < nums.length - 1; first++) {
    let third = nums.length - 1
    // 要确保前后两个first的值不同，否则会有重复解
    if ( first == 0 || nums[first] != nums[first - 1]) {

      for (let second = first + 1; second < nums.length - 1; second++) {
        // 要确保前后两个second的值不同，否则会有重复解
        if ( second == first + 1 || nums[second] != nums[second - 1]) {

          while (nums[first] + nums[second] + nums[third] > 0 && third > second) {third --}

          // 还要判断一次 second != third，是因为上一个循环的结果有可能使third == second
          if (nums[first] + nums[second] + nums[third] == 0 && second != third) {out.push([nums[first], nums[second], nums[third]])}

        }
      }
    }
  }
  return out
};

console.log(threeSum([-1,0,1,2,-1,-4]))