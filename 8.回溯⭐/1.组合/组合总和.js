var combinationSum = function(candidates, target) {
  let path = []
  let sum = 0
  let res = []
  backTrack(0)
  return res

  function backTrack (index) {
      if (sum === target) {
          res.push([...path])
          return
      }
      else if (sum > target) return
      else {
          for (let i = index; i < candidates.length; i++) {
              const n = candidates[i]
              path.push(n)
              sum += n
              backTrack(i)
              path.pop()
              sum -= n
          }
      }
  }
};

console.log(combinationSum([2, 3, 6, 7], 7))