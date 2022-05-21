// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// DNA to RNA Conversion
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/5556282156230d0e5e000089


INSTRUCTIONS

Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

EXAMPLE

"GCAT"  =>  "GCAU"


PSEUDO CODE
1. Create a function that takes in an array of Strings and returns a replaces all the "T" part of the Strings with the String "U".
*/


// SOLUTION
function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U");
}

// TEST CASES
console.log(DNAtoRNA("TTTT"), "UUUU");

console.log(DNAtoRNA("GCAT"), "GCAU");

console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");


/*
NOTE
String.prototype.replace()
The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
*/