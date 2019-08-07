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
