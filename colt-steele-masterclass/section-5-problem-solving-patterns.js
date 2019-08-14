//Frequency Counter - validAnagram
/*
Given two strings, write a function to determine if the second string is an anagram of the first
*/
function validAnagram(str1, str2) {
  if (str1 === '' && str2 === '') return true;
  const frequency1 = {};
  const frequency2 = {};
  for (let char of str1) {
    frequency1[char] = (frequency1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequency2[char] = (frequency2[char] || 0) + 1;
  }
  for (let key in frequency1) {
    if (frequency1[key] !== frequency2[key]) return false;
  }
  return true;
}

console.log(validAnagram('anagram', 'nagaram')) //true
console.log(validAnagram('rat', 'car')) //false

//Multiple Pointers - countUniqueValues
/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      arr[i + 1] = arr[j];
      i++;
      j++;
    }
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])) //2
