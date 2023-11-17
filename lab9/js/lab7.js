// index.js - Lab 7 functions
// Author: Cody Proctor
// Date: nov 3, 2023


// sortusername - a function that takes unser input and sorts the letters of their name

function sortusername() {var userName = window.prompt ("Hi, please tell me your name so I can fix it. ");
console.log("userName =", userName);
//split string into an array
var nameArray = userName.split('');
console.log("nameArray =", nameArray);
//sort the array
var nameArraySort = nameArray.sort();
console.log("nameArraySort =", nameArraySort );
//join the array back to string
var nameSorted = nameArraySort.join('');
console.log("nameSorted =", nameSorted);
return nameSorted;
}


//output 
document.writeln("Oh hey I've fixed your name: ",
sortUserName(), "</br>");





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
