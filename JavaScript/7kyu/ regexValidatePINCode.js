// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript

// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
// If the function is passed a valid PIN string, return true, else return false.

function validatePIN(pin) {
  // The regular expression /^(\d{4}|\d{6})$/ matches the start (^) and end ($) of the string, and accepts either four digits (\d{4}) or six digits (\d{6}).
  // The test method of the regular expression object is used to check if the input pin matches the regular expression. If there is a match, test returns true, otherwise it returns false.
  return /^(\d{4}|\d{6})$/.test(pin);
}
