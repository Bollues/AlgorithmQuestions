/**
 * 慢指针从head开始走，一次走一步
 * 快指针从head.next开始走，一次走两步
 * 当快慢指针相遇时，就有环
 * 当fast走到头时，就无环
 */

var hasCycle = function(head) {
  if (!head || !head.next) return false
  let slow = head
  let fast = head.next
  while(slow !== fast) {
      if (!fast.next || !fast.next.next) return false
      slow = slow.next
      fast = fast.next.next
  }
  return true
};