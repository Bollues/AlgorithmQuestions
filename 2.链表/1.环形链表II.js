/**
 * 慢指针从head开始走，一次走一步
 * 快指针从head开始走，一次走两步
 * 当fast走到头时，就无环
 * 当快慢指针相遇时，初始指向head的额外指针ptr和slow开始往后走，相遇时就是入环点
 */

var detectCycle = function (head) {
  if (!head || !head.next) return null
  let slow = head
  let fast = head
  let ptr = head

  do {
    if (!fast.next || !fast.next.next) return null
    slow = slow.next
    fast = fast.next.next
  } while (slow !== fast)

  while (ptr !== slow) {
    ptr = ptr.next
    slow = slow.next
  }
  return ptr
};