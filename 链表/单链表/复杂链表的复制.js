/**
 * 复制一个复杂链表。在复杂链表中，每个节点除了有一个 next 指针指向下一个节点，还有一个 random 指针指向链表中的任意节点或者 null。
 * 看图秒懂：https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof/solution/fu-za-lian-biao-de-fu-zhi-by-leetcode-so-9ik5/
 */

var copyRandomList = function(head) {
  if (!head) return null
  // 先复制一份
  for (let node = head; node != null; node = node.next.next) {
    const newNode = new Node(node.val, node.next, null)
    node.next = newNode
  }
  // 再加上random指针
  for (let node = head; node != null; node = node.next.next) {
    const newNode = node.next
    newNode.random = node.random ? node.random.next : null
  }
  const newHead = head.next
  // 最后连上newNode
  for (let node = head; node != null; node = node.next) {
    const newNode = node.next
    const oldNextNode = node.next.next
    newNode.next = oldNextNode ? oldNextNode.next : null
    node.next = oldNextNode
  }
  return newHead
}