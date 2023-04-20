// https://www.codewars.com/kata/546e2562b03326a88e000020

// square every digit of a number and concatenate them.

// Declares a function named "squareDigits" which takes one argument "num"
function squareDigits(num) {
  let newNum = new Array(); // Declares an empty array named "newNum"

  ('' + num).split('').map((n) => {
    // Converts the input argument "num" into a string, splits it into an array of single characters, then calls the "map" method on the array to iterate through each character, with the result being an array of squared digits

    newNum.push(n ** 2); // The squared digit is pushed into the "newNum" array using the "push" method
  });

  return parseInt(newNum.join('')); // Joins the elements of the "newNum" array into a single string using the "join" method, then converts the string to an integer using the "parseInt" method and returns it as the result of the function
}
