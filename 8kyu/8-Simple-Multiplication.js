// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Simple multiplication
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/583710ccaa6717322c000105


INSTRUCTIONS
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


PSEUDO CODE
1. Create a function that takes in numbers.
2. If the number's modulo remainder is strictly equal to 0 then it is an even number and will be multiplied by 8 and returned.
3. Else it is an odd number and will be multiplied by 9 and returned.

*/


// SOLUTION
function simpleMultiplication(number) {
    return (number % 2 === 0) ? (number*8) : (number*9);
}


// TEST CASES
console.log(simpleMultiplication(2),16,'Should return double given argument..')
console.log(simpleMultiplication(1),9,'Should return double given argument..')
console.log(simpleMultiplication(8),64,'Should return given argument times eight...')
console.log(simpleMultiplication(4),32,'Should return given argument times eight...')
console.log(simpleMultiplication(5),45,'Should return given argument times nine...')

