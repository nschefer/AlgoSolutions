//Frequency Counter - sameFrequency
/*
Write a function that takes two positive integers. Find out if the two numbers have the same frequency of digits.
*/

function sameFrequency(first, second) {
  const firstStr = String(first);
  const secondStr = String(second);
  if (firstStr.length !== secondStr.length) return false;
  const freq = {};

  for (let i = 0; i < firstStr.length; i++) {
    freq[firstStr[i]] = (freq[firstStr[i]] || 0) + 1;
  }

  for (let j = 0; j < secondStr.length; j++) {
    if (!freq[secondStr[j]]) return false;
    freq[secondStr[j]] -= 1
  }
  return true;
}

console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false

//Frequency Counter / Multiple Pointers - areThereDuplicates
/*
Implement a function that accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
*/

function areThereDuplicates() {
  const args = [...arguments];
  const lookup = {};
  for (let i = 0; i < args.length; i++) {
    lookup[args[i]] = (lookup[args[i]] || 0) + 1;
  }
  for (let key in lookup) {
    if (lookup[key] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)) // flase
console.log(areThereDuplicates('a', 'b', 'c', 'd', 'a')) // true

//Multiple Pointers - averagePair
/*
Write a function that takes a sorted array of integers and a target average and determines if there is a pair of values in the arrya where the average of the pair equals the target average.
*/

function averagePair(arr, targ) {
  if (!arr.length) return false;
  let left = 0;
  let right = arr.length - 1;
  while (left !== right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === targ) {
      return true;
    } else if (avg > targ) {
      right--;
    } else {
      left++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)) //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)) //false

//Multiple Pointers - isSubsequence
/*
 Write a function which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string
*/

function isSubsequence(one, two) {
  if (one.length > two.length) return false;
  if (!one) return false;
  let oneP = 0;
  let twoP = 0;
  while (twoP < two.length) {
    if (one[oneP] === two[twoP]) oneP++;
    if (oneP === one.length) return true;
    twoP++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world')) //true
console.log(isSubsequence('abc', 'acb')) //false

//Sliding Window - maxSubarraySum
/*
Write a function which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.
*/

function maxSubarraySum(arr, num) {
  if (num > arr.length) return null;
  let currSum = 0;

  for (let i = 0; i < num; i++) {
    currSum += arr[i];
  }
  let maxSum = currSum;
  for (let i = num; i < arr.length; i++) {
    currSum += arr[i] - arr[i - num];
    if (currSum > maxSum) maxSum = currSum;
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)) //700
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)) //5

//Sliding Window - minSubArrayLen
/*
 Write a function which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous  subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
*/

function minSubArrayLen(arr, num) {
  let total = 0;
  let start = 0;
  let end = 0;
  let min = Infinity;
  while (start < arr.length) {
    if (total < num && end < arr.length) {
      total += arr[end];
      end++;
    } else if (total >= num) {
      min = Math.min(min, end - start);
      total -= arr[start];
      start++;
    } else {
      break;
    }
  }
  return min === Infinity ? 0 : min;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)) //2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) //1

//Sliding Window - findLongestSubstring
/*
Write a function which accepts a string and returns the length of the longest substring with all distinct characters.
*/

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

console.log(findLongestSubstring('rithmschool')) //7
console.log(findLongestSubstring('longestsubstring')) //8
