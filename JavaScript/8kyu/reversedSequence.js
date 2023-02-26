// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => { // declares a function named reverseSeq that takes one parameter n.
    const result = []; // declares a constant variable named result and assigns it an empty array. This array will be used to store the integers.
    
    for(let i = n; i >= 1; i--){ // sets up a for loop that initializes a variable i to n, iterates as long as i is greater than or equal to 1, and decrements i by 1 on each iteration. This loop will iterate from n to 1.
      result.push(i); // pushes the value of i to the end of the result array on each iteration of the loop.
    }
    
    return result; // returns the resulting array result after the loop has finished iterating.
};