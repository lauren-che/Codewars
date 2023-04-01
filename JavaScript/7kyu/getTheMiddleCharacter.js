// https://www.codewars.com/kata/56747fd5cb988479af000028

// Output: The middle character(s) of the word represented as a string.
// If the word's length is odd, return the middle character. 
// If the word's length is even, return the middle 2 characters.

// psuedo code
    // check the length of the input string
    // if the length is odd, return the middle character
    // else return the middle 2 characters
        // how to return the two middle characters of a string javascript

// First define a function named "getMiddle" that takes a string parameter "s"
function getMiddle(s) {
  let textLength = s.length; // declare a variable "textLength" to store the length of the input string "s"

  if (textLength % 2 != 0) {
    // check if the length of the input string is odd or even
    let start = (textLength - 1) / 2; // If odd, declare a variable "start" to store the index of the middle character
    return s.slice(start, start + 1); // Then return a substring of length 1 containing the middle character
  } else {
    let start = textLength / 2 - 1; // If even, declare a variable "start" to store the index of the first middle character
    return s.slice(start, start + 2); // The return a substring of length 2 containing the middle two characters
  }
}

