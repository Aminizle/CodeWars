// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Function 1 - hello world
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript


INSTRUCTIONS

Make a simple function called greet that returns the most-famous "hello world!".
Style Points

Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?


PSEUDO CODE
1. Create a function "greet" that returns a string "hello world!" when called.
*/


// SOLUTION
greet = ()=> "hello world!";

// alternative solution
// function greet(){
//     return "hello world!";
// }

// TEST CASES
const assert = require("chai").assert;

describe("Testing function", function() {
  it("Is it a function?", function() {
    assert.strictEqual(typeof greet, "function", "greet should be a function");
  });
  it("Correct return-value?", function() {
    assert.strictEqual(greet(), "hello world!");
  });
});


