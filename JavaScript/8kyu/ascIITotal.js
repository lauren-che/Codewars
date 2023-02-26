// https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript


// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Output Examples
// uniTotal("a") == 97
// uniTotal("aaa") == 291

// the uniTotal function calculates the sum of ASCII character codes for all characters passed through a given string.
function uniTotal (string) {

    let total = 0; // On this line I initialize a variable total to 0 to store the sum of ASCII character codes.

    for(let i = 0; i < string.length; i++) { // Here a for loop is initialized which runs until the length of the input string

        for ( let j=0; j < string[i].length; j++ ) { // Here I am using a nested for loop that is initialized to iterate over each character in the current string element

            let char_code = string[i].charCodeAt(j); // Here a variable named char_code is initialized with the character code of the current character

            total += char_code; // Then the value of char_code is added to the total variable

            }
        }
        return total; // The value of total is returned as the output of the function
}
