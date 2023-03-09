// https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

// create a function that will return that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.



// Return the total figure the individual will receive as a string prefixed with "£"
function bonusTime(salary, bonus) {
    // If bonus is true, the salary should be multiplied by 10.
    if (bonus) {
    
        // Return the total figure the individual will receive as a string prefixed with "£" '\u00A3' 
      return '\u00A3' + (salary * 10);
    }
    // If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
    return '\u00A3' + salary;
}