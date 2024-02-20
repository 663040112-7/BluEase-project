function calculateAndShowScore() {
    // Calculate the score as before
    var totalScore = 0;
    var radioButtons = document.querySelectorAll('input[type="radio"]');
  
    radioButtons.forEach(function (radioButton) {
      if (radioButton.checked) {
        totalScore += parseInt(radioButton.value);
      }
    });
  
    // Display the score in a single popup
    alert('Form submitted successfully!\nTotal Score: ' + totalScore);
  }
  
  document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission
  
    calculateAndShowScore(); // Call the combined function
  });
  