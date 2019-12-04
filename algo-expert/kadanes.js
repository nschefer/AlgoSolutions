function kadanesAlgorithm(array) {
  // Write your code here.
  let localTotal = array[0];
  let returnedTotal = array[0];

  for (let i = 1; i < array.length; i++) {
    const currentEl = array[i];
    if (currentEl > localTotal + currentEl) {
      localTotal = currentEl;
    } else {
      localTotal = localTotal + currentEl;
    }

    if (localTotal > returnedTotal) returnedTotal = localTotal;
  }
  return returnedTotal;
}

console.log('should equal 34 --', kadanesAlgorithm([1, 2, 3, 4, 5, 6, -22, 7, 8, 9, 10])) //34

