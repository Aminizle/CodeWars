// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Sentence Smash
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/53369039d7ab3ac506000467/javascript


INSTRUCTIONS

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!


EXAMPLE

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'


PSEUDO CODE
1. Create a function that takes in an array of Strings and returns a concatinated String with spaces in between but not before first String or after last String.

NOTE
Array.prototype.join()
The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
*/


// SOLUTION
function smash(words) {
    return words.join(" ");
};

// TEST CASES
var wordArray = smash(['hello', 'world', 'this', 'is', 'great']);
console.log(wordArray);

var wordArray1 = smash(['hello', 'world']);
console.log(wordArray1);

