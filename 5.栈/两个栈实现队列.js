/**
 * 辅助栈，一个作为入队栈，一个作为出队栈
 */
var CQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

CQueue.prototype.appendTail = function (value) {
  this.inStack.push(value)
};

CQueue.prototype.deleteHead = function () {
  if (this.inStack.length === 0 && this.outStack.length === 0) return -1
  if (this.outStack.length > 0) return this.outStack.pop()
  else {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop())
    }
    return this.outStack.pop()
  }
}
