function twoSum(nums, target) {
  // key: nums[i]
  // value: idx
  let hashTable = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in hashTable) {
      return [hashTable[target - nums[i]], i]
    }
    hashTable[nums[i]] = i
  }
}

console.log(twoSum([1,2,3], 4))