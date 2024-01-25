// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Reversed String
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript


INSTRUCTIONS
Complete the solution so that it reverses the string passed into it. 

Example:
'world'  =>  'dlrow'
'word'   =>  'drow'

PSEUDO CODE

*/


// SOLUTION
function solution(str){
  return str.split('').reverse().join('');
}


// TEST CASES
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(solution('world'), 'dlrow');
    assert.strictEqual(solution('hello'), 'olleh');
    assert.strictEqual(solution(''), '');
    assert.strictEqual(solution('h'), 'h');
  });
});  



/*
NOTE
const solution = str=> str.split('').reverse().join('');
*/