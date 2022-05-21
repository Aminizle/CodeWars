// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Convert boolean values to strings 'Yes' or 'No'.
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
/*
Kata URL
https://www.codewars.com/kata/53369039d7ab3ac506000467/javascript


INSTRUCTIONS
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


PSEUDO CODE
1. Function that takes in boolean values true : false
2. if statement that compares for strictly equal value and type of input boolean to true and returns the string "Yes" if true.
3. else if compares for strictly equal value and type of input boolean to false and returns the string "No" if true.
4. We assume only booleans true and false will be used.
*/

// SOLUTION
function boolToWord(bool) {
    if (bool === true) {
        return bool = "Yes"
    } else if (bool === false) {
        return bool = "No"
    }
}


// TEST CASES
console.log(boolToWord(true), "Yes");
console.log(boolToWord(false), "No");
