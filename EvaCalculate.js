// Get the button and score display element
const calculateBtn = document.getElementById("calculateBtn");
const totalScoreElement = document.getElementById("totalScore");

// Add an event listener to the button
calculateBtn.addEventListener("click", calculateScore);

function calculateScore() {
    var sliders = document.querySelectorAll(".slider");
    var values = [];
    for (var i = 0; i < sliders.length; i++) {
      values.push(sliders[i].value);
    }
    
    // Calculate the total score by adding up the values of all the sliders.
    var totalScore = 0;
    for (var i = 0; i < values.length; i++) {
      totalScore += values[i];
    }
    
    // Display the total score to the user.
    var totalScoreElement = document.getElementById("totalScore");
    totalScoreElement.innerHTML = totalScore;
    totalScoreElement.textContent = totalScore;
  }



