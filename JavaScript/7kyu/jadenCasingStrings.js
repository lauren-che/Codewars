//  https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

// capitalize each word in a string

String.prototype.toJadenCase = function () {
  return (
    // This line splits the input string into an array of words, using the space character as the delimiter.
    this.split(' ')
      // This line applies a map() function to the array of words, which converts each word to Jaden Case.
      .map(function (word) {
        // The map() function takes a callback function that is called once for each element in the array. The callback function takes the current word as its parameter, and it returns a new string where the first letter is capitalized (using the toUpperCase() method) and the rest of the letters are preserved (using the slice() method to get a substring starting from the second letter).
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      // This line joins the array of Jaden Case words back into a single string, using a space character as the separator. The resulting string is the original string in Jaden Case.
      .join(' ')
  );
};
