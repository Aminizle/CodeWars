// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Abbreviate a Two Word Name
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/typescript

INSTRUCTIONS

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

Psuedocode:
- 

*/


// SOLUTION
export function abbrevName(name: string): string {
return name.charAt(0)+"."+ ;
}


// TEST CASES
import { abbrevName } from "./solution";
import { assert } from "chai";

describe("Sample Test Cases", function(){
  const SamHarris = abbrevName("Sam Harris");
  const PatrickFeenan = abbrevName("Patrick Feenan");
  const RFavuzzi = abbrevName("R Favuzzi");
  it("Should return a proper abbreviate", function() {
    assert.strictEqual(SamHarris, "S.H", "Should return S.H");
    assert.strictEqual(PatrickFeenan, "P.F", "Should return P.F");
    assert.strictEqual(RFavuzzi, "R.F", "Should return R.F");
  });
});



/*
NOTE
Array.prototype.indexOf()
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
*/