class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //O(1)
  push(val) {
    const newNode = new Node(val);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.length++;
    return this;
  }

  //O(N)
  pop() {
    if (!this.head) {
      return undefined;
    } else {
      let prev = this.head;
      let current = this.head;
      while (current.next) {
        prev = current;
        current = current.next;
      }
      this.tail = prev;
      this.tail.next = null;
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
      return current;
    }
  }

  //O(1)
  shift() {
    if (!this.head) {
      return undefined;
    } else {
      const oldHead = this.head;
      this.head = this.head.next;
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
      return oldHead;
    }
  }

  //O(1)
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //O(N)
  get(idx) {
    if (idx < 0 || idx >= this.length) {
      return null;
    } else {
      let counter = 0;
      let current = this.head;
      while (counter !== idx) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }

  //O(N)
  set(idx, val) {
    const node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  //O(1)
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    const newNode = new Node(val);
    const prev = this.get(idx - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  //O(N)
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    const prev = this.get(idx - 1);
    const current = prev.next;
    prev.next = current.next;
    this.length--;
    return current;
  }

  //O(N)
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

}

const list = new SinglyLinkedList();


list.push(0);
list.push(1);
list.push(2);
list.push(3);
console.log(list.reverse())

console.log(list);
