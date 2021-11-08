/**
 * 
 * 
 * 注意点1：对象的key为 nums[i]
 * 注意点2：对象的value为 idx
 */

function twoSum(nums, target) {
  let hashTable = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hashTable) {
      return [hashTable[target - nums[i]], i]
    }
    hashTable[nums[i]] = i
  }
}

console.log(twoSum([1,2,3], 4))