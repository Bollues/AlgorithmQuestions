/**
 * 快慢指针
 * 
 * 注意点1：fast 初始值为 slow.next
 * 注意点2：fast一次走2步
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