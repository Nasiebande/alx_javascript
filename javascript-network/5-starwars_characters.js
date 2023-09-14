#!/usr/bin/node

// Import the 'request' module for making HTTP requests
const request = require('request');

// Get the movie ID from the command-line arguments
const movieId = process.argv[2];

// Construct the URL for the Star Wars movie API endpoint using the provided movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request to the specified URL
request(url, (error, response, body) => {
    // Check if there was no error and the response status code is 200 (OK)
    if (!error && response.statusCode === 200) {
        // Parse the JSON response from the API
        const data = JSON.parse(body);

        // Loop through each character in the movie's character list
        data.characters.forEach(character => {
            // Send a GET request to retrieve information about the character
            request(character, (error, response, body) => {
                // Check if there was no error and the response status code is 200 (OK)
                if (!error && response.statusCode === 200) {
                    // Parse the JSON response for character data
                    const characterData = JSON.parse(body);

                    // Print the name of the character
                    console.log(characterData.name);
                } else {
                    console.log('Error: Could not retrieve character information.');
                }
            });
        });
    } else {
        console.log('Error: Could not retrieve movie information.');
    }
});
