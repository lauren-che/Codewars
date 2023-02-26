//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.


function sumTwoSmallestNumbers(numbers) {  
    let array = numbers.sort((a, b) => a - b); // first sort the values in ascending order
    return array[0] + array[1]; // return the sum of the value in index 0 and 1 - the two lowest positive numbers
}   

// test results: when an array is passed like [19, 5, 42, 2, 77], the output should be 7.