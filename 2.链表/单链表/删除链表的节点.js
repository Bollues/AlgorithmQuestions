/**
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。返回删除后的链表的头节点。
 */

/**
 * 给出head, 待删除节点的值
 * 定位到待删除节点的上一个节点，修改上一个节点的 \textit{next}next 指针，使其指向待删除节点的下一个节点
 */
var deleteNode = function (head, val) {
  if (head.val === val) return head.next
  let res = head
  let pre = null
  while (head) {
    if (head.val === val) {
      pre.next = head.next
      return res
    }
    pre = head
    head = head.next
  }
  return res
};

/**
 * 不给head，只给待删除结点
 * 在删除节点之前，将 node 的节点值修改为 node.next 的节点值
 */
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};