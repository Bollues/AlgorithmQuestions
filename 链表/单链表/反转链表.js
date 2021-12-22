/**
 * 原地修改，用tmp记录下一个节点
 * 用pre记录前一个节点
 * 用cur记录当前节点
 */


var reverseList = function(head) {
  if (!head) return null
  let pre = null
  let cur = head
  while (cur) {
      const tmp = cur.next
      cur.next = pre
      pre = cur
      cur = tmp
  }
  return pre
};