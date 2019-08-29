class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //O(1)
  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  //O(1)
  pop() {
    if (!this.first) return null;
    const removed = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    this.first = removed.next;
    this.size--;
    return removed;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //O(1)
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  //O(1)
  dequeue() {
    if (!this.first) return null;
    const removed = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    }
    this.first = removed.next;
    this.size--;
    return removed;
  }
}

const stack = new Stack();

stack.push(0);
stack.push(1);
stack.push(2);
stack.pop();
stack.pop();


const queue = new Queue;

queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
