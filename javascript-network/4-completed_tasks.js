#!/usr/bin/node

const request = require('request');

// Check if the user provided the API URL as the first argument
const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Please provide the API URL as the first argument.');
  process.exit(1);
}

// Perform a GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  // Parse the JSON response from the API
  const todos = JSON.parse(body);

  // Create an object to store the counts of completed tasks by user ID
  const completedTasksByUser = {};

  // Loop through the todos and count completed tasks for each user
  todos.forEach((todo) => {
    if (todo.completed) {
      if (completedTasksByUser[todo.userId]) {
        completedTasksByUser[todo.userId]++;
      } else {
        completedTasksByUser[todo.userId] = 1;
      }
    }
  });

  // Print the completed tasks by user ID
  console.log(JSON.stringify(completedTasksByUser, null, 2));
});
