/**
 * 类似于盛最多水的容器
 * 
 */


var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[nums.length - 1]

  for (let pA = 0; pA < nums.length - 2; pA++) {
    const n1 = nums[pA]
    let pB = pA + 1
    let pC = nums.length - 1
    while (pB < pC) {
      const n2 = nums[pB]
      const n3 = nums[pC]
      const sum = n1 + n2 + n3
      if (sum > target) {
        pC--
      } else {
        pB++
      }
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
    }
  }
  return res
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))