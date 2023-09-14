#!/usr/bin/node

console.log("Start of the execution queue");

// Asynchronous code using setTimeout with a delay of 0 milliseconds
setTimeout(function() {
  console.log("Final code block to be executed"); // This code will be executed after the loop
}, 0);

// Loop from 1 to 100 to print numbers
for (let i = 1; i <= 100; i++) {
  console.log(i); 
}

console.log("End of the loop printing");
