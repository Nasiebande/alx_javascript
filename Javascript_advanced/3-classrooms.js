#!/usr/bin/node

// Define a function named 'createClassRoom' that takes 'numbersOfStudents' as a parameter
function createClassRoom(numbersOfStudents) {
  // Define a nested function named 'studentSeat' that takes 'seat' as a parameter
  function studentSeat(seat) {
    // Return another function (closure) that has access to 'seat'
    return function() {
      return seat; // This inner function returns the seat number
    };
  }
  
  // Initialize an empty array 'students' to store student seat functions
  const students = [];
  
  // Loop to create student seat functions and push them into the 'students' array
  for (let i = 0; i < numbersOfStudents; i++) {
    students.push(studentSeat(i + 1)); // 'i + 1' represents the seat number
  }
  
  // Return the 'students' array, which contains functions representing student seats
  return students;
}

// Call the 'createClassRoom' function with an argument of 10 to create a class with 10 students
const classRoom = createClassRoom(10);
