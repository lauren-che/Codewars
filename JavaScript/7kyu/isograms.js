// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters is an isogram.
// Assume the empty string is an isogram. Ignore letter case.

// psuedo code
// check to see if a letter repeats in the string passed in.
// if it does not, then return true
// else return false

//  defines a function named isIsogram that takes one parameter, str.
function isIsogram(str) {
  // This line returns the result of a regular expression test. The regular expression is /(\w).*\1/i, which matches any character followed by the same character (i.e., a repeated character) regardless of case. The i at the end of the regular expression makes the test case-insensitive.
  // The test() method returns true if the regular expression matches any part of the str parameter, and false otherwise.
  // The ! before the test negates the result, so the function returns true if str does not contain any repeated characters and false otherwise.
  return !/(\w).*\1/i.test(str);
}
