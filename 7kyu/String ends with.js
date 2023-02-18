// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// String ends with?
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript


INSTRUCTIONS

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 

EXAMPLE

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false


PSEUDO CODE
1. Create a function that takes in 2 strings.
2. based on the number of characters in the second string we should splice the end of the first string
3. compare if both second string and sliced first string are the same then
4.return true 
5.returns false (based on example)
*/

// SOLUTION
function solution(str, ending) {
return str.endsWith(ending);
}

// TEST CASES
const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(solution("abcde", "cde"), true);
    Test.assertEquals(solution("abcde", "abc"), false);
  });
});

/*
NOTE

*/
