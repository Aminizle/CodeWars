/**
Write a function that takes two numbers and returns
the sum of those numbers
*/

/*
PsuedoCode:
1. create a function that takes in 2 integers num1, num2
2. initialise sum variable with 0
3. pass the result of adding num1 and num2 to the sum variable
x. log function given 2 integers
*/

let add = (num1, num2) => num1 + num2;

console.log("add", add(2, 3)); // Expects 5

/**
Write a function that takes any number of arguments
of type number and returns the sum of all the arguments
*/

/*
PsuedoCode:
1. create a function that takes in any number integer values
2. initialise sum variable with 0
3. pass the result of adding num1 and num2 to the sum variable
x. log function of all given integers
*/
function sum(...numbers) {
    return numbers.reduce((acc, val) => acc + val, 0);
}

console.log("sum", sum(2, 3, 4, 5)); // Expects 14

/**
Write a function that takes two strings, A and B,
and returns whether B is in A in a case-insensitive way
*/
function stringIncludes() {}

console.log(
  "stringIncludes",
  stringIncludes("I drove to New York in a van with my friend", "new")
); // Expects true

/**
Write a function that takes an array of objects, and returns an array
of the objects' "name" property, only if that property exists
*/
function getNames() {}

console.log(
  "getNames",
  getNames([
    { a: 1 },
    { name: "Jane" },
    {},
    { name: "Mark" },
    { name: "Sophia" },
    { b: 2 },
  ])
); // Expects ['Jane', 'Mark', 'Sophia']

/**
Write a function that takes an array of numbers and returns the
index of the largest number
*/
function getLargestNumberIndex() {}

console.log("getLargestNumberIndex", getLargestNumberIndex([7, 1, 4, 12, 9])); // Expects 3

/**
Write a function that returns a promise that resolves
after n number of milliseconds
*/
function delay(n) {}

(async () => {
  console.time("Testing delay");
  await delay(1000);
  console.timeEnd("Testing delay");
})();
