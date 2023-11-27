// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Sum of the first nth term of Series
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/555eded1ad94b00403000071


INSTRUCTIONS

Your task is to write a function which returns the sum of following series upto nth term(parameter).
Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

EXAMPLE
(Input --> Output)
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

PSEUDO CODE
1. Create a function that takes in an array of numbers.
2. if number is 0 then return 0.00 as a string.
3. declare and initialize sum variable.
4. forloop that cycles through the lenght of the array.
5. for each iteration the function summates the numbers.
6. the returned numbers have two decimal numbers and are a String.

*/

// Happy Coding ^_^
// SOLUTION
function SeriesSum(n) { 
  if(0 == n) return "0.00"
  let sum = 1;
  for(let i=1; i<n; i++) sum += 1/(1+3*i);
  return `${sum.toFixed(2)}`;
}

// TEST CASES
console.log(SeriesSum(1), "1.00")
console.log(SeriesSum(2), "1.25")
console.log(SeriesSum(3), "1.39")
console.log(SeriesSum(4), "1.49")
