#!/usr/bin/node

// Define a higher-order function 'divideBy' that takes 'firstNumber' as a parameter
function divideBy(firstNumber) {
  // Return an anonymous function that takes 'secondNumber' as a parameter
  return function(secondNumber) {
    // Return the result of dividing 'secondNumber' by 'firstNumber'
    return secondNumber / firstNumber;
  };
}

// Define another higher-order function 'addBy' that takes 'firstNumber' as a parameter
function addBy(firstNumber) {
  // Return an anonymous function that takes 'secondNumber' as a parameter
  return function(secondNumber) {
    // Return the result of adding 'firstNumber' and 'secondNumber'
    return firstNumber + secondNumber;
  };
}

// Create specific functions with predefined 'firstNumber' values using 'addBy' and 'divideBy'
const addBy100 = addBy(100);     // Create a function that adds 100 to a given number
const addBy1000 = addBy(1000);   // Create a function that adds 1000 to a given number
const divideBy10 = divideBy(10); // Create a function that divides a number by 10
const divideBy100 = divideBy(100); // Create a function that divides a number by 100
