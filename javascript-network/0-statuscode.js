#!/usr/bin/node

const request = require('request');

// Check if the user provided a URL as the first argument
const url = process.argv[2];

if (!url) {
  console.error('Please provide a URL as the first argument.');
  process.exit(1);
}

// Perform a GET request to the specified URL
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }
  
  // Print the status code
  console.log(`code: ${response.statusCode}`);
});
