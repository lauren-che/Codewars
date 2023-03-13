// https://www.codewars.com/kata/57f609022f4d534f05000024/train/javascript

// First I define a functoin "stray" that takes an array "numbers" input
function stray(numbers) {
    // Then I will use a for loop to iterate through the "numbers" array
    for (let i = 0; i < numbers.length; i++) {
    
        // Then I check to see if the index of the current element in the array is the same as the last index of the same element in the array
        if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
        
        // If the indices are the same, then the current element is the only occurrence of that number in the array, so return it
        return numbers[i];
        }
    }
}