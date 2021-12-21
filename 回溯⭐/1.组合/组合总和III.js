function combinationSum3(k, n) {
  let res = []
  let path = []
  let sum = 0
  backTrack(1)
  return res

  function backTrack(index) {
    if (sum > n || path.length > k) return
    if (sum === n && path.length === k) {
      res.push([...path])
      return 
    }
    for (let i = index; i <= 9; i++) {
      path.push(i)
      sum += i
      backTrack(i + 1)
      path.pop()
      sum -= i
    }
  }
}


console.log(combinationSum3(3, 9))