/**
 * 1. 使用中序遍历访问每个节点cur
 * 2. 访问节点时构建cur和pre的指向（这里的pre是链表中的pre）
 *        pre.right = cur
 *        cur.left = pre
 * 3. 中序遍历完后，最后构建头节点和尾节点的指向
 *        head.left = pre
 *        pre.right = head
 */

var treeToDoublyList = function (root) {
  if (!root) return null
  let head
  let pre
  dfs(root)
  head.left = pre
  pre.right = head
  return head

  function dfs(cur) {
    if (!cur) return
    if (cur.left) dfs(cur.left)
    if (!pre) {                         // 说明是头节点，用head记录
      head = cur  
    } else {
      pre.right = cur
      cur.left = pre
    }
    pre = cur
    if (cur.right) dfs(cur.right)
  }
};