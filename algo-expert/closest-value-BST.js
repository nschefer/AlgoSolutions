function findClosestValueInBst(tree, target) {
  let closestVal = tree.value;
  while (tree) {
    if (Math.abs(target - tree.value) < Math.abs(target - closestVal)) {
      closestVal = tree.value
    }
    if (tree.value === target) {
      return target
    } else if (tree.value > target) {
      tree = tree.left
    } else {
      tree = tree.right
    }
  }
  return closestVal
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else if (this.right === null) {
      this.right = new BST(value);
    } else {
      this.right.insert(value);
    }
    return this;
  }
}

const test = new BST(100)
  .insert(5)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(1)
  .insert(22)
  .insert(1)
  .insert(1)
  .insert(3)
  .insert(1)
  .insert(1)
  .insert(501)
  .insert(55000)
  .insert(204)
  .insert(205)
  .insert(207)
  .insert(206)
  .insert(208)
  .insert(203)
  .insert(-51)
  .insert(-403)
  .insert(1001)
  .insert(57)
  .insert(60)
  .insert(4500)

console.log('should be 100 -- ', findClosestValueInBst(test, 100))

console.log('should be 4500 -- ', findClosestValueInBst(test, 4501));
