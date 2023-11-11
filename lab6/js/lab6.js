// index.js - Lab 6 array and objects
// Author: Cody Proctor
// Date: Oct 30, 2023

// Constants

//define variables
myTransport = ["bike","skateboard","Ford mustang","rides from friends"]

//create an object for my main ride
var mymainride = { 
make: "Ford", 
model: "mustang", 
color: "black", 
year: "1969", 
age: function () { return 2023 - this.year;}}

//output
document.writeln("kinds of transport I use: " myTransport, "</br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");





// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
