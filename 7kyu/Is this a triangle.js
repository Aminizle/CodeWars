// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Is this a triangle?
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/54ff3102c1bad923760001f3


INSTRUCTIONS

Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

NOTES:
A triangle can only be build if the sum of 2 sides is always larger then 3rd remaining side.

PSEUDO CODE
1. Create a function that takes in 3 integers.
2. if side a and b are greater in sum then c 
and if side b and c are greater in sum then a
and if side c and a are greater in sum then b 
3. then return true
4. else return false 
*/

// Happy Coding ^_^
// SOLUTION
function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && c + a > b) {
    return true;
  }
  return false;
}

// TEST CASES
const { assert } = require("chai");

describe("Public tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(isTriangle(1, 2, 2), true);
    assert.strictEqual(isTriangle(7, 2, 2), false);
  });
});
