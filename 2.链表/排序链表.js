/**
 * 非最优解
 * 全部切断，排序后重组
 */

var sortList = function (head) {
  if (!head || !head.next) return head;
  //全部切断
  let s = []
  while (head) {
    let t = head.next
    head.next = null
    s.push(head)
    head = t
  }
  //排序并重组
  s.sort((a, b) => (a.val - b.val))
  for (let i = 0; i < s.length - 1; i++) {
    s[i].next = s[i + 1]
  }
  return s[0]
}