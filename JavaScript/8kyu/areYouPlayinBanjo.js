// https://www.codewars.com/kata/53af2b8861023f1d88000832/train/javascript


// Create a function which answers the question "Are you playing banjo?".
function areYouPlayingBanjo(name) {
    // If your name starts with the letter "R" or lower case "r", you are playing banjo!
    // First we take the first index of name and make it lowercase name[0].toLowerCase(). Then I'm checking to see if it's equal type and equal value to 'r' name[0].toLowerCase() === 'r'.
    return name + (name[0].toLowerCase() === 'r' ? ' plays banjo' : ' does not play banjo');
  }