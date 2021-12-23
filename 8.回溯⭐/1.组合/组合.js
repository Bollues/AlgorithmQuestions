/**
 * 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
 * 
 */

// function combine(n, k) {
//   let res = []
//   let path = []
//   for (let i = 1; i <= n; i++) {
//     backTrack(i)
//     path = []
//   }
//   return res

//   function backTrack(index) {
//     path.push(index)
//     if (path.length === k) {
//       res.push([...path])
//       return
//     }
//     for (let i = index + 1; i <= n; i++) {
//       backTrack(i)
//       path.pop()
//     }
//   }
// }


function combine(n, k) {
  let res = []
  let path = []
  backTrack(0)
  return res

  function backTrack(index) {
    if (path.length === k) {
      res.push([...path])
      return
    }
    for (let i = index + 1; i <= n; i++) {
      path.push(i)
      backTrack(i)
      path.pop()
    }
  }
}


console.log(combine(4, 2))
