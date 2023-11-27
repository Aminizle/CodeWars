// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// If you can't sleep, just count sheep!!
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript


INSTRUCTIONS

If you can't sleep, just count sheep!!
Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


PSEUDO CODE
1. Create a function that takes in an array of numbers.
2. Function makes all names start with an uppercase first letter.
3. Function then returns name + " plays banjo" if name starts with R.
4. Else returns name + " does not play banjo".
*/


// SOLUTION
var countSheep = function (num){
    let sheepString='';
  for(let i=1;i<=num;i++){
    sheepString += i.toString() + ' sheep...'
  }
  return sheepString
  }

// TEST CASES
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Fixed tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(countSheep(0), "");
    assert.strictEqual(countSheep(1), "1 sheep...");
    assert.strictEqual(countSheep(2), "1 sheep...2 sheep...");
    assert.strictEqual(countSheep(3), "1 sheep...2 sheep...3 sheep...");
  });
});
