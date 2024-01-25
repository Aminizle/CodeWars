// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Opposites Attract
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/555086d53eac039a2a000083/train/typescript


INSTRUCTIONS

Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


PSEUDO CODE

*/


// SOLUTION
export function lovefunc(flower1: number, flower2: number): boolean {
    return ((flower1 % 2 == 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 == 0))? true :false;
}


// TEST CASES
import { assert } from "chai";
import { lovefunc } from "./solution";

describe("Do we love each other?", function() {
  it("Basic tests", function() {
    assert.isTrue(lovefunc(1, 4));
    assert.isFalse(lovefunc(2, 2));
    assert.isTrue(lovefunc(0, 1));
    assert.isFalse(lovefunc(0, 0));
  });
});



/*
NOTE

*/