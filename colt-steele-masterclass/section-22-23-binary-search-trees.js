class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //O(log n)
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.val) return undefined;
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  //recursive
  //O(log n)
  // find(val, node = this.root) {
  //   if (!node) return false;
  //   if (val === node.val) return true;
  //   if (val < node.val) return this.find(val, node.left);
  //   else return this.find(val, node.right);
  // }

  //iterative
  //O(log n)
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (val === current.val) return true;
      if (val < current.val) current = current.left;
      else current = current.right;
    }
    return false
  }

  BFS() {
    if (!this.root) return undefined;
    const queue = [];
    const visited = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      visited.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }

  DFSPreOrder() {
    if (!this.root) return undefined;
    const visited = [];
    let current = this.root;
    const dfs = node => {
      visited.push(node.val);
      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
    }
    dfs(current);
    return visited;
  }

  DFSPostOrder() {
    if (!this.root) return undefined;
    const visited = [];
    let current = this.root;
    const dfs = node => {
      if (node.left) dfs(node.left);
      if (node.right) dfs(node.right);
      visited.push(node.val);
    }
    dfs(current);
    return visited;
  }

  DFSInOrder() {
    if (!this.root) return undefined;
    const visited = [];
    let current = this.root;
    const dfs = node => {
      if (node.left) dfs(node.left);
      visited.push(node.val);
      if (node.right) dfs(node.right);
    }
    dfs(current);
    return visited;
  }

}

const tree = new BinarySearchTree;

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSInOrder());
