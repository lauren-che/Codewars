// https://www.codewars.com/kata/56f3f6a82010832b02000f38/train/javascript

// TODO: Refactor and shorten the function

function describeAge(age) {
    if (age <= 12) {
        return "You're a(n) kid";
    } else if (age >= 13 && age <= 17) {
        return "You're a(n) teenager";
    } else if (age >= 18 && age <= 64) {
        return "You're a(n) adult";
    } else {
        return "You're a(n) elderly";
    }
}

  // use Conditional chains
  // The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an if … else if … else if … else chain:
  // example:
  // function example() {
  //   return condition1 ? value1
  //         : condition2 ? value2
  //         : condition3 ? value3
  //         : value4;
  // }

function describeAge(age) {
return (age <= 12) ? "You're a(n) kid"
: (age >= 13 && age <= 17) ? "You're a(n) teenager"
: (age >= 18 && age <= 64) ? "You're a(n) adult"
: "You're a(n) elderly";
}

function describeAge(age) {let s = "You're a(n) "
return (age<13)?`${s}kid`:(age<18)?`${s}teenager`:(age<65)?`${s}adult`:`${s}elderly`;
}
