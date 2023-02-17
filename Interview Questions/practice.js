/*
Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
*/

function fizzBuzz(num) {
    if ( num >0 && num<101){
        if(num%3===0 &&num%5===0){
            console.log("FizzBuzz")
        }else if(num%3===0){
            console.log("Fizz")
        }else if(num%5===0){
            console.log("Buzz")
        }else{
           return num.toString()
        }
    }
    else(
        console.log("Number is out of bounds. Please provide num value between 1-100")
    )
}


function fizzBuzzRangeTest() {
    for (let i=0;i<102;i++){
        console.log(fizzBuzz(i));
    }
}

fizzBuzzRangeTest()