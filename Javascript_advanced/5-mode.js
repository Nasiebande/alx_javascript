#!/usr/bin/node

// Define a function 'changeMode' that takes size, weight, transform, background, and color as parameters
function changeMode(size, weight, transform, background, color) {
  // Return an anonymous function
  return function() {
    // Change various styles of the document body based on the provided parameters
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

// Define the 'main' function that sets up the page and user interface
function main() {
  // Create different functions using 'changeMode' with different style settings
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  
  // Create a new paragraph element and set its text content
  const paragraph = document.createElement("p");
  paragraph.textContent = "Welcome Holberton!";
  // Append the paragraph element to the document body
  document.body.appendChild(paragraph);
  
  // Create buttons for switching styles and set their text content
  const spookyButton = document.createElement("button");
  spookyButton.textContent = "Spooky";
  const darkModeButton = document.createElement("button");
  darkModeButton.textContent = "Dark mode";
  const screamModeButton = document.createElement("button");
  screamModeButton.textContent = "Scream mode";
  
  // Add event listeners to the buttons to apply the corresponding style when clicked
  spookyButton.addEventListener("click", spooky);
  darkModeButton.addEventListener("click", darkMode);
  screamModeButton.addEventListener("click", screamMode);
  
  // Append the buttons to the document body
  document.body.appendChild(spookyButton);
  document.body.appendChild(darkModeButton);
  document.body.appendChild(screamModeButton);
}

// Call the 'main' function to set up the page and user interface
main();
