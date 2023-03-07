// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

// First we need to define a function called n
function digitize(n) {
    // then we need to create a variable called nString and turn the number passed into the function to a string
    const nString = n.toString();
    // then we need to create a variable called nArr to split the output in the nString variable to an array -> nString.split('') , then we reverse the numbers in the array -> .reverse() 
    const nArr = nString.split('').reverse()
    // now we need to turn the reversed array which are strings into digits. We do this by using .map().
    // Remember: map() creates a new array from calling a function for every array element. So essentially we are calling a function that will take nString and parse each string element into a digit. We will then return a new array with each element now a digit.
    return nArr.map(nString => parseInt(nString))
}