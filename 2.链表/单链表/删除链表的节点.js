/**
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。返回删除后的链表的头节点。
 */

var deleteNode = function (head, val) {
  if (head.val === val) return head.next
  let res = head
  let pre = null
  while (head) {
    if (head.val === val) {
      pre.next = head.next
      return res
    }
    pre = head
    head = head.next
  }
  return res
};