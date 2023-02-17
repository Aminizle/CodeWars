/*
Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

P.R.E.P
parameters
Returns
Examples
Pseudo Code

Parameters:
1-100 int range

Returns:
int or string of each iteration

Example:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

Pseudo Code:
function {
    for loop 1-100,
    check if number is devisible by 3 & 5 if true then print FizzBuzz
    each iteration check if number is devisible by 3 if true then print Fizz
    else check if number is devisible by 5 if true then print Buzz
    else print iteration number in console
}
*/

function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else console.log(i);
  }
}

fizzBuzz();
