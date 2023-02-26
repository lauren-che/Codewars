// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// Create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str){
    return str.slice(1,-1); // removes the first and last characters of a string
};

// The slice() method extracts the part of a string and returns the extracted part in a new string.
