// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Even or Odd
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/53da3dbb4a5168369a0000fe


INSTRUCTIONS

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


PSEUDO CODE
1. Create a function that takes in an array of numbers.
2. If the number is evenly devisable then the function returns the String "Even".
3. Else is the number not evenly devisable then the function returns the String "Odd".

*/


// SOLUTION
function even_or_odd(number) {
  if((number%2)===0){
      return "Even";
  }else {
      return "Odd";
  }
}


// TEST CASES
console.log(even_or_odd(2), "Even");
console.log(even_or_odd(7), "Odd");
console.log(even_or_odd(-42), "Even");
console.log(even_or_odd(-7), "Odd");
console.log(even_or_odd(0), "Even");


// Optimal Solution
// function even_or_odd(number) {
//  return number % 2 === 0 ? 'Even' : 'Odd';
//   }