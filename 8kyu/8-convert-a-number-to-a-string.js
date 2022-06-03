// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Convert a Number to a String!
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/5265326f5fda8eb1160004c8


INSTRUCTIONS

We need a function that can transform a number into a string.

What ways of achieving this do you know?

EXAMPLE
123 --> "123"
999 --> "999"

PSEUDO CODE
1. Create a function that takes in numbers.
2. Function uses toString() to convert input numbers to a string output.
3. Function returns string output.

*/

// Happy Coding ^_^
// SOLUTION
const numberToString = (num)=> String(num) 
      
      // TEST CASES
console.log(numberToString(67), '67');

    // Best Practices
    // function numberToString(num) {
    //     return num.toString();
    //   }