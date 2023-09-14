function welcome(firstName, lastName) {
  // Create a variable fullName by concatenating firstName and lastName with a space in between
  const fullName = firstName + ' ' + lastName;

  // Define the displayFullName function within the welcome function
  function displayFullName() {
    // Display an alert with the welcome message containing fullName
    alert('Welcome ' + fullName + '!');
  }

  // Call the displayFullName function
  displayFullName();
}

// Call the welcome function with 'Holberton' as firstName and 'School' as lastName
welcome('Holberton', 'School');
