/**
 * 递归，4个if
 * 谁val小，next就是谁，进入递归，return小的
 * 
 * 追问，当 l1.val === l2.val
 * 
 * 错误点：
 *      最后两个没有 return
 */

var mergeTwoLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    // 当 l1.val === l2.val
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