// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Square(n) Sum
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/515e271a311df0350d00000f


INSTRUCTIONS

Complete the square sum function so that it squares each number passed into it and then sums the results together.


EXAMPLE

[1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

PSEUDO CODE
1. Create a function that takes in an array of numbers.
2. function squares all the numbers passed through.
3. Funcition stores all the squared numbers.
4. Function returns the sum of all these numbers.

*/


// SOLUTION
function squareSum(numbers) {
    let sum = 0
    for( let i = 0; i < numbers.length; i++) {
        sum += numbers[i] **2
    }
    return sum
}
  
  
  // TEST CASES
  console.log(squareSum([1,2]), 5)
  console.log(squareSum([0, 3, 4, 5]), 50)
  console.log(squareSum([]), 0)
  
 