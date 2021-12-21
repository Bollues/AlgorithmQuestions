var partition = function(s) {
  let path = []
  let res = []
  backTrack(0)
  return res

  function backTrack (index) {
      if (index >= s.length) {
          res.push([...path])
          return
      }
      for (let i = index; i < s.length; i++) {
        if (!helper(s, index, i)) continue
        path.push(s.substr(index, i - index + 1))
        backTrack(i + 1)
        path.pop()
      }
  }
};

const helper = (s, l, r) => {
  for (let i = l, j = r; i < j; i++, j--) {
      if(s[i] !== s[j]) return false;
  }
  return true;
}
