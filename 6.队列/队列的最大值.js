/**
 * 额外维护一个双端递增队列biQueue
 * 每次push时，弹出biQueue尾值，直到biQueue尾值比push值大
 * 每次pop时，如果pop值 === biQueue头值，则弹出biQueue头值
 */
var MaxQueue = function () {
  this.queue = []
  this.biQueue = []
};

MaxQueue.prototype.max_value = function () {
  if (this.biQueue.length === 0) return -1
  return this.biQueue[0]
};

MaxQueue.prototype.push = function (value) {
  this.queue.push(value)
  while (value > this.biQueue[this.biQueue.length - 1]) this.biQueue.pop()    // 每次push时，弹出biQueue尾值，直到biQueue尾值比push值大
  this.biQueue.push(value)
};

MaxQueue.prototype.pop = function () {
  if (this.queue.length === 0) return -1
  let value = this.queue.shift()
  if (value === this.biQueue[0]) this.biQueue.shift()   // 每次pop时，如果pop值 === biQueue头值，则弹出biQueue头值
  return value
};