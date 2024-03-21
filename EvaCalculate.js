function calculateAndShowScore() {
  // Calculate the score as before
  let totalScore = 0;
  const radioButtons = document.querySelectorAll('input[type="radio"]:checked');

  if (radioButtons.length === 0) {
    alert('กรุณาเลือกคะแนน');
    return;
  }

  radioButtons.forEach(radioButton => {
    totalScore += parseInt(radioButton.value);
  });

  // Create the popup content
  let popupContent = `<h2>ผลการประเมิน</h2>`;
  popupContent += `<p id='total'>คะแนนรวม: ${totalScore}</p>`;

  // Add interpretation based on score
  if (totalScore >= 0 && totalScore <= 4) {
    popupContent += `<p id="result" style="color: rgb(184, 223, 249)">ท่านไม่มีอาการซึมเศร้าหรือมีก็เพียงเล็กน้อย</p>` +
      '<p id="suggest">ไม่จำเป็นต้องรักษา</p>';
  } else if (totalScore >= 5 && totalScore <= 8) {
    popupContent += `<p id="result" style="color: rgb(169, 223, 191)">ท่านมีอาการซึมเศร้าระดับเล็กน้อย</p>` +
    '<p>ควรพักผ่อนให้เพียงพอ นอนหลับให้ได้ 6-8 ชั่วโมง ออกกำลังกายสม่ำเสมอ ทำกิจกรรมที่ทำให้ผ่อนคลาย พบปะเพื่อนฝูง ควรทำแบบประเมินอีกครั้งใน 1 สัปดาห์</p>';
  } else if (totalScore >= 9 && totalScore <= 14) {
    popupContent += `<p id="result" style="color: rgb(249, 231, 159)">ท่านมีอาการซึมเศร้าระดับปานกลาง</p>` +
      '<p id="suggest">ควรพักผ่อนให้เพียงพอ นอนหลับให้ได้ 6-8 ชั่วโมง ออกกำลังกายสม่ำเสมอ ทำกิจกรรมที่ทำให้ผ่อนคลาย พบปะเพื่อนฝูง ควรขอคำปรึกษาช่วยเหลือจากผู้ที่ไว้วางใจ ไม่จมอยู่กับปัญหา มองหาหนทางคลี่คลาย หากอาการที่ท่านเป็นมีผลกระทบต่อการทำงานหรือการเข้าสังคม (อาการซึมเศร้าทำให้ท่านมีปัญหาในการทำงาน การดูแลสิ่งต่าง ๆ ในบ้าน หรือการเข้ากับผู้คน ในระดับมากถึงมากที่สุด) หรือหากท่านมีอาการระดับนี้มานาน 1-2 สัปดาห์แล้วยังไม่ดีขึ้น ควรพบแพทย์เพื่อรับการช่วยเหลือรักษา</p>';

  } else if (totalScore >= 15 && totalScore <= 19) {
    popupContent += `<p id="result" style="color: rgb(250, 215, 160)">ท่านมีอาการซึมเศร้าระดับรุนแรงค่อนข้างมาก</p>` +
    '<p id="suggest">ควรพบแพทย์เพื่อประเมินอาการและให้การรักษาระหว่างนี้ควรพักผ่อนให้เพียงพอ นอนหลับให้ได้ 6-8 ชั่วโมง ออกกำลังกายเบาๆ ทำกิจกรรมที่ทำให้ผ่อนคลาย ไม่เก็บตัว และควรขอคำปรึกษาช่วยเหลือจากผู้ใกล้ชิด</p>';
  } else if (totalScore >= 20) {
    popupContent += `<p id="result" style="color: rgb(245, 183, 177)">ท่านมีอาการซึมเศร้าระดับรุนแรงมาก</p>` +
    '<p id="suggest">ต้องพบแพทย์เพื่อประเมินอาการและให้การรักษาโดยเร็ว ไม่ควรปล่อยทิ้งไว้</p>';
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

  // Add the event listener to the close button
  closeButton.addEventListener('click', (event) => {
    event.preventDefault();

    // Remove the popup from the DOM
    popup.remove();
  });
}

// Add the event listener to the submit button
document.getElementById('submitBtn').addEventListener('click', calculateAndShowScore);

// Add the event listener to the close button outside of the calculateAndShowScore() function
const closeButton = document.querySelector('.close-btn');
closeButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Remove the popup from the DOM
  popup.remove();
});

