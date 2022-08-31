// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Sum without highest and lowest number
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/576b93db1129fcf2200001e6


INSTRUCTIONS

Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

EXAMPLE
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

PSEUDO CODE
1. Create a function that takes in an array of String.
2. function loops throught the array starting at the 0th index and skipping 1.
3. creating a new array that will keep adding the Strings in the array using .push().

*/

// Happy Coding ^_^
// SOLUTION

function sumArray(array) {
    console.log(array.sort());
}
// function sumArray(array) {
//     let newArray = [];
//     for (let i=0;i<array.lenght;i++) {
//         newArray.sort(array[i])
//     } return result = (newArray[0] + newArray[-1])-newArray;
// }


// TEST CASES
console.log( sumArray(null)                     , 0 );
console.log( sumArray([ ])                      , 0 );
console.log( sumArray([ 3 ])                    , 0 );
console.log( sumArray([ 3, 5 ])                 , 0 );
console.log( sumArray([ 6, 2, 1, 8, 10 ])       , 16 );
console.log( sumArray([ 0, 1, 6, 10, 10 ])      , 17 );
console.log( sumArray([ -6, -20, -1, -10, -12 ]), -28 );
console.log( sumArray([ -6, 20, -1, 10, -12 ])  , 3 );
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