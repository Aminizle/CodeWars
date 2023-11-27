// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Filter out the geese
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript


INSTRUCTIONS

Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.


PSEUDO CODE
1. Create a function that takes in a list of Strings.
2. if string matches array object then slice it out of the string
3. return list of remaining string


*/

// Happy Coding ^_^
// SOLUTION
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
 return birds.filter((duck) => !geese.includes(duck));

}

/*
EXPLANATION
This function takes a list of strings as an argument birdList. It defines an array geese containing the strings to filter out. It then uses the filter() method to create a new array that only contains elements from birdList that are not in the geese array. The includes() method is used to check whether each element of birdList is in the geese array, and the ! operator is used to invert the result, so that the filter keeps elements that are not in the geese array. Finally, the filtered array is returned.
*/

//  TEST
const Test = require("@codewars/test-compat");

describe("Basic tests", function () {
  it("Mixed list", function () {
    Test.assertDeepEquals(
      gooseFilter([
        "Mallard",
        "Hook Bill",
        "African",
        "Crested",
        "Pilgrim",
        "Toulouse",
        "Blue Swedish",
      ]),
      ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
    );
  });
  it("No geese", function () {
    Test.assertDeepEquals(
      gooseFilter([
        "Mallard",
        "Barbary",
        "Hook Bill",
        "Blue Swedish",
        "Crested",
      ]),
      ["Mallard", "Barbary", "Hook Bill", "Blue Swedish", "Crested"]
    );
  });
  it("All geese", function () {
    Test.assertDeepEquals(
      gooseFilter([
        "African",
        "Roman Tufted",
        "Toulouse",
        "Pilgrim",
        "Steinbacher",
      ]),
      []
    );
  });
});

