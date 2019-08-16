//Hard Recursion - reverse
/*
Write a function which accepts a string and returns a new string in reverse.
*/

function reverse(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
}

console.log('reverse("hello")', reverse('hello')) //olleh
console.log("reverse('noah')", reverse('noah')) //haon


//Hard Recursion - isPalindrome
/*
Write a function which returns true if the string passed to it is a palindrome
(reads the same forward and backward). Otherwise it returns false.
*/

function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, str.length - 1));
}

console.log('isPalindrome("racecar")', isPalindrome('racecar')) //true
console.log("isPalindrome('bb')", isPalindrome('bb')) //false

//Hard Recursion - someRecursive
/*
Write a function which accepts an array and a callback.
The function returns true if a single value in the array returns
true when passed to the callback. Otherwise it returns false.
*/

function someRecursive(arr, callback) {
  if (!arr.length) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.slice(1), callback);
}

const isOdd = val => val % 2 !== 0;

console.log('someRecursive([1, 2, 3], isOdd)', someRecursive([1, 2, 3], isOdd)) //true
console.log('someRecursive([2, 4, 6, 8, 7], isOdd)', someRecursive([2, 4, 6, 8, 7], isOdd)) //true
console.log('someRecursive([2, 4, 6], isOdd)', someRecursive([2, 4, 6], isOdd)) //false

//Hard Recursion - flatten
/*
 Write a function which accepts an array of arrays and
 returns a new array with all values flattened.
*/

// //with helper
// function flatten(arr) {
//   let result = [];

//   function helper(array) {
//     if (!array.length) {
//       return;
//     } else if (Array.isArray(array[0])) {
//       helper(array[0]);
//     } else {
//       result.push(array[0]);
//     }
//     helper(array.slice(1));
//   }

//   helper(arr);
//   return result;
// }

// with loop
function flatten(arr) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]))
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr;
}

console.log('flatten([1, 2, 3, [4, 5]])', flatten([1, 2, 3, [4, 5]])) //[1,2,3,4,5]
console.log('flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])', flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) //[1,2,3]
