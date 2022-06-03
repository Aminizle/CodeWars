// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Convert a String to a Number!
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/544675c6f971f7399a000e79


INSTRUCTIONS

We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

EXAMPLE
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7

PSEUDO CODE
1. Create a function that takes in Strings.
2. Function uses parseInt() to convert input String to a number output.
3. Function returns number output.

*/

// Happy Coding ^_^
// SOLUTION
const stringToNumber = function(str){
const number = parseInt(str);
return number
    
  }
  
  // TEST CASES
  console.log(stringToNumber("1234"),1234)
  console.log(stringToNumber("605"), 605)
  console.log(stringToNumber("1405"),1405)
  console.log(stringToNumber("-7"),  -7)

// Here is what the arrow function version would look like
//   const stringToNumber = s => parseInt(s);