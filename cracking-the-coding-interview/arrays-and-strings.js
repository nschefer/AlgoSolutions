//1.3 URLify
/*
Write a method to replace all spaces in a string with '%20'. You may assume that the string has sufficient space at the end to hold the additional characters, and that you are given the "true" length of the string. (Note: if implementing in Java, please use a character array so that you can perform this operation in place.)
*/

function URLify(string, trueLength) {
  let newIndex = string.length - 1;
  const str = string.split('');
  for (let i = trueLength - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      str[newIndex] = '0';
      str[newIndex - 1] = '2';
      str[newIndex - 2] = '%';
      newIndex -= 3;
    } else {
      str[newIndex] = str[i];
      newIndex--;
    }
  }
  return str.join('');
}

let sentence = 'hello my name is noah        '

console.log(URLify(sentence, 21));

//1.4 Palindrome Permutation
/*
Given a string, write a function to check if it is a permutation of a palindrome.
Ignore casing and non-letter characters.
*/

function palindromePermutation(str) {
  const string = str.split(' ').join('').toLowerCase();
  const hash = {};

  for (let i = 0; i < string.length; i++) {
    if (hash.hasOwnProperty(string[i])) {
      hash[string[i]]++;
    } else {
      hash[string[i]] = 1;
    }
  }

  let oddCount = 0;
  for (let key in hash) {
    if (hash[key] % 2 !== 0) {
      oddCount++
    }
  }

  return oddCount <= 1
}

console.log(palindromePermutation('aabab'))
