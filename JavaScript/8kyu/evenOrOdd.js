// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    // An integer is even if it is divisible by 2. Checking if a number is even is equivalent to checking if number % 2 === 0
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}