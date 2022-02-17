/**
 * 用map模拟，注意旧元素在前面，新元素在后面
 */

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity    // 缓存容量
    this.map = new Map()
  }

  get(key) {
    if (this.map.has(key)) {
      const val = this.map.get(key)
      this.map.delete(key)
      this.map.set(key, val)
      return val
    } else return -1
  }

  put(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key)
    }
    this.map.set(key, value)
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value)     // 删除第一个元素
    }
  }
}
