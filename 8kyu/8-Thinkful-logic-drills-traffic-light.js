// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Thinkful - Logic Drills: Traffic light
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/58649884a1659ed6cb000072


INSTRUCTIONS

You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

EXAMPLE

update_light('green') should return 'yellow'.

PSEUDO CODE
1. Create a function that takes in an array of Strings.
2. If the String is "red" then function should return the String "green".
3. If the String is "green" then function should return the String "yellow".
4. If the String is "yellow" then function should return the String "red".
*/


// SOLUTION
function updateLight(current) {
    if (current === "red") {
        return "green";
    } else if (current === "green") {
        return "yellow";
    } else if (current === "yellow") {
        return "red";
    }

}


// TEST CASES
console.log(updateLight("green"), "yellow");
console.log(updateLight("yellow"), "red");
console.log(updateLight("red"), "green");


// Optimal Solution
// function updateLight(current) {
//     return current==="red" ? "green" : current==="green" ? "yellow" : "red";
// }