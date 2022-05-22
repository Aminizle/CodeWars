// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// You're a square!
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/54c27a33fb7da0db0100040e


INSTRUCTIONS
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.


EXAMPLE

-1  =>  false
0  =>  true
3  =>  false
4  =>  true
25  =>  true
26  =>  false

PSEUDO CODE
1. Create a function that takes in an array of numbers.
2. If the number is an integral number return true else return false.
*/


// SOLUTION
var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0;
  }


// TEST CASES
console.log(isSquare(-1), false, "-1: Negative numbers cannot be square numbers");
console.log(isSquare( 0), true, "0 is a square number (0 * 0)");
console.log(isSquare( 3), false, "3 is not a square number");
console.log(isSquare( 4), true, "4 is a square number (2 * 2)");
console.log(isSquare(25), true, "25 is a square number (5 * 5)");
console.log(isSquare(26), false, "26 is not a square number");


// NOTES
/*

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}

The square root of a perfect square is a whole number/integer. Its remainder when divided by 1 will always be 0.

The square root of a non-perfect square is an fractional number/float. Its remainder when divided by 1 on a computer using binary floating point format will never be 0 because the computer cannot perform floating point division accurately.

More information on floating point arithmetic: https://floating-point-gui.de/basic/
*/