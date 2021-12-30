/**
 * 环形链表
 * 先得到链表长度，然后k = length - k % length
 * 再把链表形成环
 * 最后在k的地方断开，返回断点的后面一个节点
 */

var rotateRight = function (head, k) {
  if (!head || k === 0 || !head.next) return head
  let cur = head
  let length = 1
  let ans
  while (cur.next) {               // 得到链表长度
    cur = cur.next
    length++
  }
  k = length - k % length
  if (k === 0) return head    // k === length
  cur.next = head
  while (k > 0) {
    cur = cur.next
    k--
  }
  ans = cur.next
  cur.next = null
  return ans
};