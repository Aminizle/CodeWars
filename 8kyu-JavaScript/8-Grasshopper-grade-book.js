// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *
//////////////////////////////////////////////////////////////////////////////////
// Grasshopper - Grade book
//////////////////////////////////////////////////////////////////////////////////
// ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ * ~ *

/* 
Kata URL
https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript


INSTRUCTIONS

Grade book

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score 	Letter Grade
90 <= score <= 100 	'A'
80 <= score < 90 	'B'
70 <= score < 80 	'C'
60 <= score < 70 	'D'
0 <= score < 60 	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.



PSEUDO CODE
1. Create a function that takes in 3 integers.
2. add all 3 inputs and devide by numebr of inputs (3)
3. store this in variable gradeAverage
4. using if else statements assign letter grade to numerical average
5. return letter grade.
*/


// SOLUTION
function getGrade (s1, s2, s3) {
    let gradeAverage = (s1 + s2 + s3)/3;
    if(gradeAverage>=90){
        return letterGrade = "A";
    }
    if(gradeAverage >=80 && gradeAverage < 90 ){
        return letterGrade = "B";
    }
    if(gradeAverage >=70 && gradeAverage < 80 ){
        return letterGrade = "C";
    }
    if(gradeAverage >=60 && gradeAverage < 80 ){
        return letterGrade = "D";
    }
    if(gradeAverage >=0 && gradeAverage < 60 ){
        return letterGrade = "F";
    }
  }


// TEST CASES
const Test = require('@codewars/test-compat');

describe('grade book', function () {
  it('should return an A', function () {
    Test.assertEquals(getGrade(95,90,93), 'A')
    Test.assertEquals(getGrade(100,85,96), 'A')
    Test.assertEquals(getGrade(92,93,94), 'A')
  })
  it('should return a B', function () {
    Test.assertEquals(getGrade(70,70,100), 'B')
    Test.assertEquals(getGrade(82,85,87), 'B')
    Test.assertEquals(getGrade(84,79,85), 'B')
    Test.assertEquals(getGrade(89,89,90), 'B') 
  })
    it('should return a C', function () {
    Test.assertEquals(getGrade(70,70,70), 'C')
    Test.assertEquals(getGrade(75,70,79), 'C')
    Test.assertEquals(getGrade(60,82,76), 'C')
  })
    it('should return a D', function () {
    Test.assertEquals(getGrade(65,70,59), 'D')
    Test.assertEquals(getGrade(66,62,68), 'D')
    Test.assertEquals(getGrade(58,62,70), 'D')
  })
    it('should return an F', function () {
    Test.assertEquals(getGrade(44,55,52), 'F')
    Test.assertEquals(getGrade(48,55,52), 'F')
    Test.assertEquals(getGrade(58,59,60), 'F')
  })
})


/*
NOTES
function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}

*/