// EvaCalculate.js

// Declare totalScore as a global variable
var totalScore = 0;

function calculateScore() {
    // Get all radio button elements
    var radioButtons = document.querySelectorAll('input[type="radio"]');

    // Reset total score to 0 before calculating
    totalScore = 0;

    // Loop through each radio button
    radioButtons.forEach(function (radioButton) {
        // Check if the radio button is checked
        if (radioButton.checked) {
            // Add the value to the total score
            totalScore += parseInt(radioButton.value);
        }
    });
}

function showPopup() {
    // Display the total score in a popup
    alert('Form submitted successfully!\nTotal Score: ' + totalScore);
}

document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default form submission
    calculateScore();
    showPopup();
});
