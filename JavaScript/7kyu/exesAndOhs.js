// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript

// Check to see if a string has the same amount of 'x's and 'o's.

// Defines a function called 'XO' that takes in a string as an argument
function XO(str) {
  let xNumber = ''; // Initializes a variable called 'xNumber' with an empty string
  let oNumber = ''; // Initializes a variable called 'oNumber' with an empty string

  // Loops through the string 'str' using a 'for' loop
  for (let i = 0; i < str.length; i++) {
    // Checks if the current character is 'x', ignoring case
    if (str[i].toLowerCase() === 'x') {
      xNumber += str[i]; // Adds the current character to 'xNumber' if it is 'x'

      // Checks if the current character is 'o', ignoring case
    } else if (str[i].toLowerCase() === 'o') {
      oNumber += str[i]; // Adds the current character to 'oNumber' if it is 'o'
    }
  }
  return xNumber.length === oNumber.length; // Returns 'true' if the lengths of 'xNumber' and 'oNumber' are equal, and 'false' otherwise
}
