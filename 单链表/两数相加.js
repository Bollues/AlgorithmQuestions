var addTwoNumbers = function(l1, l2) {
  let digtal = 0;  // 进位标志
  let head = null;
  let tail = null;
  while (l1 || l2) {
      const n1 = l1 ? l1.val : 0;
      const n2 = l2 ? l2.val : 0;
      const sum = n1 + n2 + digtal;
      if (!head) {
          head = tail = new ListNode(sum % 10);
      } else {
          tail.next = new ListNode(sum % 10);
          tail = tail.next;
      }
      digtal = Math.floor(sum / 10)
      if (l1) {l1 = l1.next;}
      if (l2) {l2 = l2.next;}
  }

  if (digtal) {
      tail.next = new ListNode(1);
  }

  return head;

};
