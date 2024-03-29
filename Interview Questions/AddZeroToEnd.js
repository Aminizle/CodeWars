// I give you a large array full of numbers, I need it back with the 0s at the end of the array
//

function zeroAdjuster(numbers) {
    let numbersWithoutZero = [];
    for (let i=0; i<numbers.length(); i++) {
        if ( i === 0) {
            numbersWithoutZero = numbers.filter(0)   
        }
    }
}


//example [0,1,2,3] //  should return 1,2,3,0

//shared via https://sharepad.io/live/QlHAHuI

// Solution:
// function moveZerosToEnd(arr) {
//     let zeros = [];
//     let nonZeros = [];
    
//     // Separate zeros and non-zeros into different arrays
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === 0) {
//         zeros.push(arr[i]);
//       } else {
//         nonZeros.push(arr[i]);
//       }
//     }
    
//     // Concatenate the two arrays
//     return nonZeros.concat(zeros);
//   }
  
// let arr = [1, 0, 2, 0, 3, 4];
// let newArr = moveZerosToEnd(arr);
// console.log(newArr); // [1, 2, 3, 4, 0, 0]
