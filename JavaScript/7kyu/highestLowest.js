// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// start by defining a function called highAndLow that takes in a string of space-separated numbers as an argument
function highAndLow(numbers){

    // split the string of numbers into an array of individual number strings using the space character as the separator
    numbers = numbers.split(" ");

    // then return the maximum number in the array using the Math.max method and pass in the array as an argument, followed by a space character, and then the minimum number in the array using the Math.min method and passing in the array as an argument, concatenated as a string
    return Math.max.apply(null, numbers) + " " +  Math.min.apply(null, numbers)
}


