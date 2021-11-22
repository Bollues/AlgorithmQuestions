/**
 * 反转链表的进阶版
 * k个链表为一组，用 head 和 tail 记录每一组的头和尾
 * 同时用 pre 和 nex 记录 上一组的尾 和 下一组的头 
 */

const myReverse = (head, tail) => {
  let pre = tail.next;
  let cur = head;
  while (pre !== tail) {
    const tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }
  return [tail, head];
}

var reverseKGroup = function (head, k) {
  const hair = new ListNode(0)   // 作为head的pre，以及return hair.next
  hair.next = head
  let pre = hair

  while (head) {
    let tail = pre    // tail 初始化为pre

    // 查看剩余部分长度是否大于等于 k
    for (let i = 0; i < k; i++) {
      tail = tail.next;
      if (!tail) return hair.next;
    }

    const nex = tail.next
    [head, tail] = myReverse(head, tail)

    // 把子链表重新接回原链表
    pre.next = head
    tail.next = nex
    pre = tail
    head = tail.next
  }

  return hair.next
}