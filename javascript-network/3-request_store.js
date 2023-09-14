#!/usr/bin/node

const request = require('request');
const fs = require('fs');

// Check if the user provided a URL and a file path as arguments
const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error('Please provide a URL and a file path as arguments.');
  process.exit(1);
}

// Perform a GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Write the response body to the specified file
  fs.writeFileSync(filePath, body, 'utf-8');
  console.log(`Data from ${url} has been saved to ${filePath}.`);
});
