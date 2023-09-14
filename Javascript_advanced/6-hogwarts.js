#!/usr/bin/node

// Create a studentHogwarts object using an immediately-invoked function expression (IIFE)
const studentHogwarts = (function() {
  // Private variables for the student object
  let privateScore = 0; // Private score variable to store the student's score
  let name = null;      // Private name variable to store the student's name
  
  // Private function to change the score by a specified number of points
  function changeScoreBy(points) {
    privateScore += points;
  }
  
  // Return an object with methods to interact with the student
  return {
    // Method to set the student's name
    setName: function(newName) {
      name = newName;
    },
    
    // Method to reward the student by increasing their score
    rewardStudent: function() {
      changeScoreBy(1); // Increases the score by 1
    },
    
    // Method to penalize the student by decreasing their score
    penalizeStudent: function() {
      changeScoreBy(-1); // Decreases the score by 1
    },
    
    // Method to get the student's score along with their name
    getScore: function() {
      return name + ": " + privateScore; // Returns the name and score as a formatted string
    }  
  };
})();

// Create a 'harry' object by inheriting from the 'studentHogwarts' object
const harry = Object.create(studentHogwarts);
harry.setName("Harry");          
harry.rewardStudent();           
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore());   

// Create a 'draco' object by inheriting from the 'studentHogwarts' object
const draco = Object.create(studentHogwarts);
draco.setName("Draco");          
draco.rewardStudent();           
draco.penalizeStudent();         
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore());
