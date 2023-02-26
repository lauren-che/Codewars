//https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

//  Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)


function humanReadable(seconds) { //The function is called humanReadable and takes one argument, seconds.
    let hours = Math.floor(seconds / 3600); // I am calculating the number of hours by dividing the total number of seconds by 3600 (the number of seconds in an hour) and then rounding down to the nearest whole number.
    let minutes = Math.floor((seconds % 3600) / 60); // I am calculating the number of minutes by taking the remaining seconds after calculating the number of hours (using the modulus operator %), dividing by 60 (the number of seconds in a minute), and rounding down to the nearest whole number.
    let remainingSeconds = seconds % 60; // I am calculating the number of seconds left after calculating the number of hours and minutes (again, using the modulus operator %).
    
    // Add a leading zero to any hours, minutes, or seconds less than 10 so that they are two digits long.
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;

    
    return `${hours}:${minutes}:${remainingSeconds}`; // now return a string in the format "HH:MM:SS" using template literals that incorporate the hours, minutes, and remaining seconds we calculated earlier
}
