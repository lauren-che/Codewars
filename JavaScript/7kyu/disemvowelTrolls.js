// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

// start by defining a function that's called disemvowel that takes a string input
function disemvowel(str) {
    // create a constant variable called noVowels that will take the string input and replace the vowels with no character or letter
    const noVowels = str.replace(/[aeiou]/gi, '');
    // return the results of the noVowels variable
    return noVowels
}