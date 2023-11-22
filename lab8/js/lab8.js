// index.js - Lab 8 Anon Functions and Callbacks
// Author: Cody Proctor
// Date: nov 21, 2023


function isEven(x){
  return (x % 4 == 0);
}

//test out function
console.log("Is 1 even?", isEven(1)); 
console.log("Is 4 even?", isEven(4));

array = [100, 81, 4, 16, 42, 144, 1000]
console.log("My array", array);

var result1 = array.map(isEven);
console.log("Test of evenness of array:", result1);

var result2 = array.map(function(x){
return x ** 0.5;
})

console.log("Squareroot of array", result2);




// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// Your map results data
var mapResults = "Your map results here"+ result1 + result2;

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);


// let's get this party started
main();
