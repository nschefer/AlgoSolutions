//Recursion - power
/*
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
*/

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

console.log('power(2, 0)', power(2, 0)) //1
console.log('power(2, 4)', power(2, 4)) //16

//Recursion - factorial
/*
 Write a function which accepts a number and returns the factorial of that number.
*/

function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

console.log('factorial(1)', factorial(1)) //1
console.log('factorial(4)', factorial(4)) //24
console.log('factorial(7)', factorial(7)) //5040

//Recursion - productOfArray
/*
Write a function which takes in an array of numbers and returns the product of them all.
*/

function productOfArray(arr) {
  if (!arr.length) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

console.log('productOfArray([1,2,3])', productOfArray([1, 2, 3])) //6
console.log('productOfArray([1,2,3,10])', productOfArray([1, 2, 3, 10])) //60

//Recursion - recursiveRange
/*
Write a function which accepts a number and adds up all th numbers from 0 to that number.
*/

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

console.log('recursiveRange(6)', recursiveRange(6)) //21
console.log('recursiveRange(10)', recursiveRange(10)) //55

//Recursion - fib
/*
Write a function which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
*/

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log('fib(4)', fib(4)) //3
console.log('fib(10)', fib(10)) //55
console.log('fib(28)', fib(28)) //317811
