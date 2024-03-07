function calculateAndShowScore() {
  // Calculate the score as before
  let totalScore = 0;
  const radioButtons = document.querySelectorAll('input[type="radio"]:checked');

  if (radioButtons.length === 0) {
    alert('กรุณาเลือกคะแนนทุกข้อ');
    return;
  }

  radioButtons.forEach(radioButton => {
    totalScore += parseInt(radioButton.value);
  });

  // Create the popup content
  let popupContent = `<h2>ผลการประเมิน</h2>`;
  popupContent += `<p>คะแนนรวม: ${totalScore}</p>`;

  // Add interpretation based on score
  if (totalScore >= 0 && totalScore <= 4) {
    popupContent += `<p>ท่านไม่มีอาการซึมเศร้าหรือมีก็เพียงเล็กน้อย</p>`;
  } else if (totalScore >= 5 && totalScore <= 8) {
    popupContent += `<p>ท่านอาจกำลังประสบกับภาวะอารมณ์เศร้า ควรหาคนพูดคุยหรือปรึกษานักจิตวิทยา</p>`;
  } else if (totalScore >= 9 && totalScore <= 14) {
    popupContent += `<p>ท่านอาจกำลังเผชิญกับภาวะซึมเศร้า ควรปรึกษานักจิตวิทยาหรือแพทย์ผู้เชี่ยวชาญ</p>`;
  } else if (totalScore >= 15 && totalScore <= 19) {
    popupContent += `<p>ท่านมีอาการซึมเศร้าปานกลาง ควรรีบปรึกษานักจิตวิทยาหรือแพทย์ผู้เชี่ยวชาญ</p>`;
  } else if (totalScore >= 20) {
    popupContent += `<p>ท่านมีอาการซึมเศร้ารุนแรง ควรไปพบแพทย์ผู้เชี่ยวชาญโดยเร็วที่สุด</p>`;
  } else {
    popupContent += `<p>คำนวณคะแนนผิดพลาด กรุณาลองใหม่อีกครั้ง</p>`;
  }

  // Display the popup using a more modern approach (e.g., DOM manipulation)
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = popupContent;
  document.body.appendChild(popup);

  // Add a close button to the popup
  const closeButton = document.createElement('button');
  closeButton.textContent = 'ปิด';
  closeButton.classList.add('close-btn');
  popup.appendChild(closeButton);

  // Close the popup when the close button is clicked
  closeButton.addEventListener('click', () => {
    popup.remove();
  });
}

document.getElementById('submitBtn').addEventListener('click', calculateAndShowScore);
