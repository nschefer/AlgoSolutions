const swap = (arr, idx1, idx2) => {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

class MaxBinaryHeap {
  constructor() {
    this.values = [55, 39, 41, 18, 27, 12, 33];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp(this.values.length - 1);
  }

  bubbleUp(idx) {
    let parentIdx = Math.floor((idx - 1) / 2);
    if (this.values[idx] > this.values[parentIdx]) {
      swap(this.values, idx, parentIdx);
      this.bubbleUp(parentIdx);
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swapped = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swapped = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if ((swapped === null && rightChild > element) || (swapped !== null && rightChild > leftChild)) {
          swapped = rightChildIdx;
        }
      }

      if (swapped === null) break;
      this.values[idx] = this.values[swapped];
      this.values[swapped] = element;
      idx = swapped;
    }
  }
}

const heap = new MaxBinaryHeap;

console.log(heap.values);
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());

console.log(heap.values);
