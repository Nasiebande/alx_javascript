// Define the welcomeMessage function, which takes a fullName argument
function welcomeMessage(fullName) {
  // Define a closure that displays an alert with the welcome message
  return function () {
    alert('Welcome ' + fullName);
  };
}

// Create three variables, each containing a call to welcomeMessage with a different name
const guillaume = welcomeMessage("Guillaume");
const alex = welcomeMessage("Alex");
const fred = welcomeMessage("Fred");
