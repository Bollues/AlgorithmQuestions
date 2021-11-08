

var maxSubArray = function(nums) {
  let pre = 0, maxAns = nums[0];
  nums.forEach((x) => {
      // 情况1：前面是负数，当前是正数，那肯定取当前值
      // 情况2：或者当前值虽然是负数，但前面已经累计了很多正数，那么宁愿加上这个负数
      pre = Math.max(pre + x, x);
      // pre是累计值，每累计一次我们就取一次最大值  
      maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
};

console.log(maxSubArray([1,-1,1,1,1,-1,1,1,1,1,1,-1]))