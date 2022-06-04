// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Removing Elements
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/5769b3802ae6f8e4890009d2


INSTRUCTIONS

Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

None of the arrays will be empty, so you don't have to worry about that!

EXAMPLE
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

PSEUDO CODE
1. Create a function that takes in an array of String.
2. function loops throught the array starting at the 0th index and skipping 1.
3. creating a new array that will keep adding the Strings in the array using .push().

*/

// Happy Coding ^_^
// SOLUTION

function removeEveryOther(arr){
    let newArrayContainer = [];
    for(let i=0; i<arr.length;i+=2) {
       newArrayContainer.push(arr[i]);
    }
    return newArrayContainer
  }


// TEST CASES
console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);

/*
Best Practices
Array.prototype.push()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

Array.prototype.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

function removeEveryOther(arr){
  return arr.filter(function(elem, index) {
    return index % 2 === 0;
  });
}
  */