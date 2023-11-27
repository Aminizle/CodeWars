// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Are You Playing Banjo?
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/53af2b8861023f1d88000832


INSTRUCTIONS

Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:
name + " plays banjo" 
name + " does not play banjo"

Names given are always valid strings.


PSEUDO CODE
1. Create a function that takes in an array of numbers.
2. Function makes all names start with an uppercase first letter.
3. Function then returns name + " plays banjo" if name starts with R.
4. Else returns name + " does not play banjo".
*/


// SOLUTION
function areYouPlayingBanjo(name) {
    return (name.charAt(0).toUpperCase()) === "R" ? name + " plays banjo" : name + " does not play banjo";
}


// TEST CASES
console.log(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
console.log(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo");

