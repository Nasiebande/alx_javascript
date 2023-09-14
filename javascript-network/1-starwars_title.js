#!/usr/bin/node

const request = require('request');

// Check if the user provided a movie ID as the first argument
const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a movie ID as the first argument.');
  process.exit(1);
}

// Construct the URL for the Star Wars API endpoint
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Perform a GET request to the API endpoint
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Parse the JSON response from the API
  const movieData = JSON.parse(body);

  // Check if the response contains a title
  if (movieData.title) {
    console.log(movieData.title);
  } else {
    console.error('Movie not found.');
    process.exit(1);
  }
});
