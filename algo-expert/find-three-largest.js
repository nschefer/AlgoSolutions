function findThreeLargestNumbers(array) {
  const largeArr = [null, null, null];
  for (let i = 0; i < array.length; i++) {
    updateLargest(largeArr, array[i]);
  }
  return largeArr
}

function updateLargest(largeArr, num) {
  if (!largeArr[2] || num > largeArr[2]) {
    insertSwap(largeArr, num, 2);
  } else if (!largeArr[1] || num > largeArr[1]) {
    insertSwap(largeArr, num, 1)
  } else if (!largeArr[0] || num > largeArr[0]) {
    insertSwap(largeArr, num, 0)
  }
}

function insertSwap(largeArr, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      largeArr[i] = num;
    } else {
      largeArr[i] = largeArr[i + 1]
    }
  }
}

console.log('should be [7, 8, 55] -- ', findThreeLargestNumbers([55, 7, 8]));

console.log('should be [7, 7, 8] -- ', findThreeLargestNumbers([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7, 7, 7, 7, 7]));
