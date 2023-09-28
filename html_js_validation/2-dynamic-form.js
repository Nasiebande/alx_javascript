// Get references to form elements
const dynamicForm = document.getElementById("dynamic-form");
const numFieldsSelect = document.getElementById("numFields");
const inputContainer = document.getElementById("inputContainer");

// Function to generate dynamic input fields
function generateInputFields(selectedValue) {
  // Clear any existing input fields
  inputContainer.innerHTML = "";

  // Create the specified number of input fields
  for (let i = 1; i <= selectedValue; i++) {
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = `field${i}`;
    inputField.placeholder = `Field ${i}`;
    inputContainer.appendChild(inputField);
  }
}

// Function to validate before submission
function validateForm(event) {
  // Retrieve the selected value from the dropdown
  const selectedValue = parseInt(numFieldsSelect.value);

  // Loop through the dynamically generated input fields
  for (let i = 1; i <= selectedValue; i++) {
    const fieldName = `field${i}`;
    const inputField = document.getElementsByName(fieldName)[0];

    // Check if any field is empty
    if (inputField.value === "") {
      // Prevent form submission
      event.preventDefault();
      alert("Please fill in all fields.");
      return;
    }
  }
}

// Add an event listener to the dropdown menu
numFieldsSelect.addEventListener("change", function () {
  const selectedValue = parseInt(numFieldsSelect.value);
  generateInputFields(selectedValue);
});

// Add an event listener
dynamicForm.addEventListener("submit", validateForm);
