
/**
 * 快慢指针
 * 
 */

 var getKthFromEnd = function(head, k) {
  let first = head
  let second = head
  while (k > 0) {
      first = first.next
      k --
  }
  while (first) {
      first = first.next
      second = second.next
  }
  return second
};