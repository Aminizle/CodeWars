// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////
// Convert boolean values to strings 'Yes' or 'No'.
//////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

// URL
// https://www.codewars.com/kata/53369039d7ab3ac506000467/javascript


// INSTRUCTIONS
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


// SOLUTION
function boolToWord( bool ){
    if(bool===true) {
        return bool= "Yes"
    }else if(bool===false) {
        return bool="No"
    }
  }
    
  
  // TEST CASES
  console.log(boolToWord(true), "Yes");
  console.log(boolToWord(false), "No");
