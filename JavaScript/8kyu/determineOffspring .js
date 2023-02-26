// https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript


// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son."


// create a function 'chromosomeCheck' and pass in the sperm parameter
function chromosomeCheck(sperm) { 
    // Create an if statement for if the sperm contains the XX chromosome
    if(sperm === 'XX'){
        // if so return the below statement
        return 'Congratulations! You\'re going to have a daughter.';
        // else if the the sperm contains the XY chromosome 
    } else if (sperm === 'XY'){
        // then return the below statement
    } return 'Congratulations! You\'re going to have a son.';
};