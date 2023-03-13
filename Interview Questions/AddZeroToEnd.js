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