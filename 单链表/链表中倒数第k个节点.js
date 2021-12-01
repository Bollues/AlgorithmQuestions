
/**
 * 快慢指针
 */

var getKthFromEnd = function (head, k) {
    let first = head
    let second = head
    while (k > 0) {
        first = first.next
        k--
    }
    while (first) {
        first = first.next
        second = second.next
    }
    return second
};


/**
 * 删除链表中倒数第k个节点
 * 增加一个变量 beforeSecond 记录倒数第k个节点的前一个节点
 */
var removeNthFromEnd = function (head, k) {
    let first = head
    let second = head
    let beforeSecond
    while (k > 0) {
        first = first.next
        k--
    }
    while (first) {
        first = first.next
        beforeSecond = second
        second = second.next
    }
    if (!beforeSecond) return second.next    // 如果删除的是第一个节点，直接返回第k个节点的next
    else beforeSecond.next = second.next
    return head
};