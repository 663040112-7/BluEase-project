function calculateAndShowScore() {
  // Calculate the score as before
  let totalScore = 0;
  const radioButtons = document.querySelectorAll('input[type="radio"]');

  radioButtons.forEach(radioButton => {
    if (radioButton.checked) {
      totalScore += parseInt(radioButton.value);
    }
  });

  // Display the score in a single popup
  alert(`Form submitted successfully!\nTotal Score: ${totalScore}`);

  // Separate score interpretation (assuming this is what you intend)
  interpretScore(totalScore);
}

function interpretScore(score) {
  if (score >= 0 && score <= 4) {
    alert("You appear to be doing well. Keep it up!");
  } else if (score >= 5 && score <= 8) {
    alert("It seems you might be experiencing some low moods. Consider seeking support or talking to someone you trust.");
  } else if (score >= 9 && score <= 14) {
    alert("Your score suggests you might be struggling with depression. Please consider seeking professional help.");
  } else if (score >= 15 && score <= 19) {
    alert("Your score indicates significant depressive symptoms. It's crucial to seek professional help as soon as possible.");
  } else if (score >= 20) {
    alert("Your score suggests very serious depression. Please reach out for emergency help immediately. Here are some resources: (list resources here)");
  } else {
    alert("An unexpected score was calculated. Please refresh the page and try again.");
  }
}

document.getElementById('submitBtn').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default form submission

  calculateAndShowScore();
});
