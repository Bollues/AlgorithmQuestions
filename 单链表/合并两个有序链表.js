/**
 * 递归
 * 秒懂： https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/yi-kan-jiu-hui-yi-xie-jiu-fei-xiang-jie-di-gui-by-/
 * 
 * 额外，当 l1.val === l2.val
 */

 var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
      return l2;
  } else if (l2 === null) {
      return l1;
  } else if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  } 
  // 额外，当 l1.val === l2.val
  // else if (l1.val === l2.val) {
  //     l1.next = mergeTwoLists(l1.next, l2.next);
  //     l2.next = l1
  //     return l2
  // } 
  else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
};