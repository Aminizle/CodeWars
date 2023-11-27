// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Beginner - Reduce but Grow
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*
Kata URL
https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript


INSTRUCTIONS
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


PSEUDO CODE
1. Function that takes in an array of integers
2. iterates through aray and multiplies each integer with the last
3. return final value as integer

*/

// SOLUTION
const grow = (x) => x.reduce((prev, curr) => prev * curr)


  // TEST CASES
  const strictEqual = require("chai").assert.strictEqual;
  
  function doTest(string, expected) {
    const actual = uniTotal(string);
    strictEqual(actual, expected, `for string "${string}":\n`);
  }
  
  const chai = require("chai");
  const assert = chai.assert;
  chai.config.truncateThreshold=0;
  
  describe("Basic tests",() =>{
    it("Testing for fixed tests", () => {  
      assert.strictEqual(grow([1, 2, 3]), 6);
      assert.strictEqual(grow([4, 1, 1, 1, 4]), 16); 
      assert.strictEqual(grow([2, 2, 2, 2, 2, 2]), 64); 
    });
  })
  

  /*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  */