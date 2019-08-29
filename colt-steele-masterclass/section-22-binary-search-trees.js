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
  // find(val, node = this.root) {
  //   if (!node) return false;
  //   if (val === node.val) return true;
  //   if (val < node.val) return this.find(val, node.left);
  //   else return this.find(val, node.right);
  // }

  //iterative
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

}

const tree = new BinarySearchTree;

tree.insert(10);
tree.insert(25);
tree.insert(9)
tree.insert(30)
tree.insert(4)
tree.insert(7)
tree.insert(11)
console.log(tree.find(11));
console.log(tree)
