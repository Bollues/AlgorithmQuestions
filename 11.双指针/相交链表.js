
/**
 * 双指针
 * 
 * 两个链表都不能为空，否则必不相交
 * 两个指针指向头，同时往后走，如果A走到头就指向B链表的头，反之亦然，直到两个链表指向同一个结点，该结点就是相交的结点（或null）
 * 
 * 错误点：
 *    先判断两个链表是否为null
 */

var getIntersectionNode = function (headA, headB) {
  let p1 = headA
  let p2 = headB
  while (headA !== headB) {
    headA = headA ? headA.next : p2
    headB = headB ? headB.next : p1
  }
  return headA
};