// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Grasshopper - Personalized Message
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/5772da22b89313a4d50012f7/train/typescript

INSTRUCTIONS

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:
case 	            return
name equals owner 	'Hello boss'
otherwise 	        'Hello guest'

PSEUDO CODE
1. Create a function that takes in an array of various types.
2. The function should cycle through the array untill it finds the String 'needle'.
And should then return 'found the needle at position ' + the number of the index.
*/


// SOLUTION
export function greet(name: string, owner: string): string{
    if (name === owner){
        return "Hello boss";
    }else 
    return "Hello guest";
  }


/* Alternative Solution
export function greet(name: string, owner: string): string{
  
return name === owner ? "Hello boss" : "Hello guest" ;
}
*/

// TEST CASES
import { assert } from "chai";

import { greet } from "./solution";

// TODO Add your tests here
describe("example", () => {
  it("Fixed test", () => {
    assert.strictEqual(greet('Daniel', 'Daniel'), 'Hello boss')
    assert.strictEqual(greet('Greg', 'Daniel'), 'Hello guest')
  });
});



/*
NOTE
Array.prototype.indexOf()
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
*/