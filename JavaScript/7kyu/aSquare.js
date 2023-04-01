// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// Given an integral number, determine if it's a square number:

// psuedo code
// calculate if n is a perfect square
// a perfect square is an integer that is the square of an integer
// Calculate the square root of the given number. If the result is a whole number then the given number is a perfect square.
// check if the number is positive since perfect squares can't be negative numbers
// return true or false

var isSquare = function (n) {
  // Knowing if a number is a perfect square will depend on the square root of that value. We will use Math.sqrt() to square root the input. To check if the result is a whole number, we will use Number.isInteger() and use our Math.sqrt(n) as an argument. We can then check if n is a perfect square. If the square root result is a whole number, the function will return true and if not, return false.
  if (Number.isInteger(Math.sqrt(n))) {
    return true;
  } else {
    return false;
  }
};
