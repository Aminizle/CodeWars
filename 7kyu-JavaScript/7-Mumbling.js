// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Mumbling
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/5667e8f4e3f572a8f2000039


INSTRUCTIONS

This time no story, no theory. The examples below show you how to write function accum:
The parameter of accum is a string which includes only letters from a..z and A..Z.


EXAMPLE
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

PSEUDO CODE
1. Create a function that takes in Strings.
2. Function separates each letter from the String into an array.
3. Each letter gets replaced by 1 capital letter
4. after the 1st letter each letter gets added one lower case letter incrementally. 
5. return concatinated String. 

*/

// Happy Coding ^_^
// SOLUTION
function accum(s) {
    const result = []
    const lowerStr = s.toLowerCase()
  
    for(let i = 0; i < lowerStr.length; i++) {
      let str = lowerStr[i].toUpperCase()
      for(let j = 0; j < i; j++) {
        str += lowerStr[i]
      }
      result.push(str)
    }
  
    return result.join("-")
  }
  
  // TEST CASES
  console.log(("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
  console.log(("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
  console.log(("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
  console.log(("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
  console.log(("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
  