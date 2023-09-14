// Create a global variable named globalVariable with the value "Welcome"
var globalVariable = "Welcome";

// Define the outer function
function outer() {
  // Alert the content of globalVariable
  alert(globalVariable);

  // Create a variable named course with the value "Holberton"
  var course = "Holberton";

  // Define the inner function
  function inner() {
    // Alert the concatenated content of globalVariable and course
    alert(globalVariable + ' ' + course);

    // Create a variable named exclamation with the value "!"
    var exclamation = "!";

    // Define the inception function
    function inception() {
      // Alert the concatenated content of globalVariable, course, and exclamation
      alert(globalVariable + ' ' + course + exclamation);
    }

    // Call the inception function
    inception();
  }

  // Call the inner function
  inner();
}

// Call the outer function to start the sequence
outer();
