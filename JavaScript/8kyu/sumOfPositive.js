// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
// You get an array of numbers, return the sum of all of the positives ones.


// Define a function called positiveSum that takes an array as an argument
function positiveSum(arr) {
    // Create a new array called posArr by filtering the original array for positive values
    const posArr = arr.filter(num => num > -1);
    // Create a new variable called sumArr by using the reduce method on posArr and adding up the values in the array
    const sumArr = posArr.reduce((partialSum, posArr) => partialSum + posArr, 0); 
    // Return the sum of the positive values in the original array
    return sumArr; 
}