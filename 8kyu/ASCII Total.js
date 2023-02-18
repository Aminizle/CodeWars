// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// ASCII Total
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*
Kata URL
https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript


INSTRUCTIONS
You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

Examples:

uniTotal("a") == 97
uniTotal("aaa") == 291

PSEUDO CODE
1. Function that takes in a String
2. separate each letter from the string
3. iterate each letter through a String.fromCharCode() function
4. pass each value to a sum
5. console.log(sum)
*/

// SOLUTION
function uniTotal(string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
      let charCode = string.charCodeAt(i);
      if (charCode >= 32 && charCode <= 126) {
        sum += charCode;
      }
    }
    return sum;
  }

// TEST CASES
const strictEqual = require("chai").assert.strictEqual;

function doTest(string, expected) {
  const actual = uniTotal(string);
  strictEqual(actual, expected, `for string "${string}":\n`);
}

it("sample tests", () => {
  doTest("", 0);
  doTest("a", 97);
  doTest("b", 98);
  doTest("c", 99);
  doTest("d", 100);
  doTest("e", 101);
  doTest("aaa", 291);
  doTest("Mary Had A Little Lamb", 1873);
});
