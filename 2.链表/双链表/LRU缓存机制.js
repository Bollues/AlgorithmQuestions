/**
 * 秒懂： https://leetcode-cn.com/problems/lru-cache/solution/bu-yong-yu-yan-nei-jian-de-map-gua-dang-feng-zhuan/
 * 双向链表、哈希表
 */

// 定义双向链表
class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity    // 缓存容量
    this.hash = {}              // 哈希表
    this.count = 0              // 缓存数目
    this.dummyHead = new ListNode()     // 虚拟头结点
    this.dummyTail = new ListNode()     // 虚拟尾结点
    this.dummyHead.next = this.dummyTail    // 初始时 头->尾
    this.dummyTail.prev = this.dummyHead    // 初始时 尾->头
  }

  // 哈希表中找不到对应的值，则返回 -1。被读取的节点，要刷新它的位置，移动到链表头部
  get(key) {
    let node = this.hash[key]
    if (node == null) return -1
    this.moveToHead(node)
    return node.value
  }

  // 写入新数据，先检查容量，决定是否删“老家伙”，然后创建新的节点，添加到链表头部(最不优先被淘汰)，映射到哈希表。
  // 写入已有的数据，则更新数据值，刷新节点的位置。
  put(key, value) {
    let node = this.hash[key]
    if (node == null) {
      if (this.count == this.capacity) {
        this.removeLRUItem()
      }
      let newNode = new ListNode(key, value)
      this.hash[key] = newNode
      this.addToHead(newNode)
      this.count++
    } else {
      node.value = value
      this.moveToHead(node)
    }
  }

  moveToHead(node) {
    this.removeFromList(node)
    this.addToHead(node)
  }

  removeFromList(node) {
    let temp1 = node.prev
    let temp2 = node.next
    temp1.next = temp2
    temp2.prev = temp1
  }

  // 插入到虚拟头结点和真实头结点之间
  addToHead(node) {
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.prev = node
    this.dummyHead.next = node
  }

  // 删除“老家伙”
  removeLRUItem() {
    let tail = this.popTail()
    delete this.hash[tail.key]
    this.count--
  }

  // 删除链表尾结点
  popTail() {
    let tail = this.dummyTail.prev
    this.removeFromList(tail)
    return tail
  }
}
