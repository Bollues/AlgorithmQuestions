function cheackSame(r1, r2) {
  if (!r2) return true
  if (!r1 || r1.val != r2.val) return false
  return cheackSame(r1.left, r2.left) && cheackSame(r1.right, r2.right)
}

var isSubStructure = function(A, B) {
  return Boolean(A) && Boolean(B) && ( cheackSame(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B) )
};