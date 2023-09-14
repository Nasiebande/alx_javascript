#!/usr/bin/node

const request = require('request');

// Check if the user provided the API URL as the first argument
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide the Star Wars API URL as the first argument.');
  process.exit(1);
}

// Perform a GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Parse the JSON response from the API
  const filmsData = JSON.parse(body);

  // Initialize a counter to keep track of movies with Wedge Antilles
  let movieCount = 0;

  // Loop through the films and check if Wedge Antilles (character ID 18) is present
  filmsData.results.forEach((film) => {
    if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
      movieCount++;
    }
  });

  // Print the total count of movies with Wedge Antilles
  console.log(movieCount);
});
