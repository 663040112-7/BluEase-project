
var totalScore = 0;

function calculateScore() {
    var radioButtons = document.querySelectorAll('input[type="radio"]');

    totalScore = 0;

    radioButtons.forEach(function (radioButton) {
        if (radioButton.checked) {
            totalScore += parseInt(radioButton.value);
        }
    });
}

function showPopup() {
    alert('Form submitted successfully!\nTotal Score: ' + totalScore);
}

document.getElementById('submitBtn').addEventListener('click', function (event) {
    event.preventDefault(); 
    calculateScore();
    showPopup();
});
