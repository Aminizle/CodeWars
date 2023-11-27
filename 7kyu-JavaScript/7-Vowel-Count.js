// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Vowel Count
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/54ff3102c1bad923760001f3


INSTRUCTIONS

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

PSEUDO CODE
1. Create a function that takes in a String.
2. pass vowels to variable
3. set initialize vowelCount
4. using nested loops to cycle through each letter and compare them to vowels variable
5. return vowelsCount
*/

// Happy Coding ^_^
// SOLUTION
function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a","e","i","o","u"];
    for(var i = 0;i < str.length;i++){
      for(var j=0;j<vowels.length;j++){
        if(str[i] === vowels[j]){
          vowelsCount++;
        }
      }
    }
    
    return vowelsCount;
  }
  
  // TEST CASES
  console.log(getCount("abracadabra"), 5) ;
  console.log(getCount("my pyx"), 0) ;

  