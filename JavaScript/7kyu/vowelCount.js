// https://www.codewars.com/kata/54ff3102c1bad923760001f3/solutions/javascript

// I will start by creating a function called checkVowels where a string is taken as an input 
function checkVowels(str) {

    // Then I am defining a variable called vowel for the results of the vowels that are matched in the string input. I am using a regular expression for the vowels to check for /[aeiou]/gi where (g) searches the whole string and (i) checks for vowels no matter if they are lowercase or uppercase.
    // Remember: The match() method matches a string against a regular expression
    const vowel = str.match(/[aeiou]/gi);

    // Then I will return the count of the matched vowels, otherwise I will return 0 indicating no vowels were matched in the string input.
    return vowel === null ? 0 : vowel.length;
}