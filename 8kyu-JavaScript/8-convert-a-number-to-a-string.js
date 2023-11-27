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

Examples (input --> output):

123  --> "123"
999  --> "999"
-100 --> "-100"


PSEUDO CODE
1. Create a function that takes in numbers.
2. Function uses toString() to convert input numbers to a string output.
3. Function returns string output.

*/

// Happy Coding ^_^
// SOLUTION
const numberToString = (num)=> String(num) 

// Alternative solution
// function numberToString(num) {
//       // Return a string of the number here!
//       return num.toString();
//     }

// Alternative Solution
// numberToString = (num)=> num.toString();
      
      // TEST CASES
console.log(numberToString(67), '67');

    // Best Practices
    // function numberToString(num) {
    //     return num.toString();
    //   }