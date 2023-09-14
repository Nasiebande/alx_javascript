#!/usr/bin/node

// Import the 'request' module for making HTTP requests
const request = require('request');

// Send a GET request to the API URL provided as the first command-line argument (argv[2])
request(process.argv[2], function (error, response, body) {
    // Check if there was no error in the request
    if (!error) {
        // Parse the JSON response from the API
        const todos = JSON.parse(body);

        // Create an object 'completed' to store the count of completed tasks by user ID
        const completed = {};

        // Loop through each 'todo' in the response
        todos.forEach((todo) => {
            // Check if the task is completed and if the user ID is not already in 'completed'
            if (todo.completed && completed[todo.userId] === undefined) {
                completed[todo.userId] = 1; // Initialize count to 1
            } else if (todo.completed) {
                completed[todo.userId] += 1; // Increment the count for the user ID
            }
        });

        // Print the 'completed' object, which contains the count of completed tasks by user ID
        console.log(completed);
    }
});
