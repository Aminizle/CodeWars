// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Counting sheep...
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/54edbc7200b811e956000556


Description:

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
Arrays
Fundamentals

PSEUDO CODE
1. Create a function that iterates through the array.
2. each iteration should validate if "true" is present.
3. if "true" is found it should add +1 to the sheeps present sum number.
*/


// SOLUTION
function countSheeps(arrayOfSheep) {
  let counter = 0;
  for (i=0;i<arrayOfSheep.length;i++) {
    if(arrayOfSheep[i] == "true") {
      counter++
    }
  }
  return counter;
}

// TEST CASES
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
              
Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total")
  });
});

/*
NOTE

*/