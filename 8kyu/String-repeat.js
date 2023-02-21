// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// String repeat
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript


INSTRUCTIONS

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.


Examples (input -> output)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

PSEUDO CODE
1.  create function that takes in one Integer and one Strings 
2.  returns a String * Integer.
*/


// SOLUTION
const repeatStr = (n, s) => s.repeat(n);

    
 
   
  


// TEST CASES
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", function() {
  it ("Basic tests", function() {
    assert.strictEqual(repeatStr(3, "*"), "***");
    assert.strictEqual(repeatStr(5, "#"), "#####");
    assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
  });
});
/*
NOTE

*/