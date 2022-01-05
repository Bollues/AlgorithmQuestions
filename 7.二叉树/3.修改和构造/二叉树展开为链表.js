/**
 * 变成数组后一个个改
 */
var flatten = function (root) {
  if (!root) return root
  let res = []
  inTravel(root)
  for (let i = 1; i < res.length; i++) {
    res[i - 1].left = null
    res[i - 1].right = res[i]
  }
  return res[0]

  function inTravel(r) {
    if (!r) return
    res.push(r)
    if (r.left) inTravel(r.left)
    if (r.right) inTravel(r.right)
  }
};

/**
 * 一边遍历一边改
 * 具体做法：
 *    对于cur，如果左子树不为空
 *        - 找到左子树的最右边节点作为prev
 *        - cur.right 作为 next
 *        - cur.left设置为空
 */
var flatten = function (root) {
  if (!root) return root
  let cur = root
  let prev
  while (cur) {
    if (cur.left) {
      prev = findRight(cur.left)
      prev.right = cur.right
      cur.right = cur.left
      cur.left = null
    }
    cur = cur.right
  }
  return root

  function findRight(r) {
    if (!r) return null
    while (r.right) r = r.right
    return r
  }
};