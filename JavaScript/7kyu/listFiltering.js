// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

// Return a new array with the strings filtered out

// define a function named "filter_list" that takes an array parameter "l"
function filter_list(l) {
    // Return the filtered array using the filter method:
    // The filter method takes a function that returns true if an element in the array satisfies a certain condition
  return l.filter((str) => typeof str != 'string' && str >= 0);
  // Here, the function checks if the element is not a string and is greater than or equal to zero
  // The filter method returns a new array containing only the elements that satisfy the condition which is a new array with the strings filtered out
}
