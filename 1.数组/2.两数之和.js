/**
 * 用map存target - nums[i] 和 index
 * 
 * 对象的key为 nums[i]
 * 对象的value为 idx
 */

function twoSum(nums, target) {
  let map = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in map) {
      return [map[target - nums[i]], i]
    }
    map[nums[i]] = i
  }
}

console.log(twoSum([1,2,3], 4))