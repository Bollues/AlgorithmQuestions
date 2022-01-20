/**
 * 
 * 
 * 注意点1：对象的key为 nums[i]
 * 注意点2：对象的value为 idx
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