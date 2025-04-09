// Initialize EmailJS with your User ID
(function () {
  emailjs.init("Zaroo_aziz"); // Your EmailJS User ID
})();

function showAnswer(answer) {
  const answerDiv = document.getElementById('answer');
  // Check if she clicked 'Yes'
  if (answer === 'yes') {
    answerDiv.innerHTML = "Thank you for saying YES! 💖 Let's grow together and see where life takes us!";
    
    // Send email notification when "Yes" is selected
    sendEmailNotification();
  } else {
    answerDiv.innerHTML = "So sad. But know that no matter what, I'll always cherish you. ❤️";
  }
  // Disable the buttons after an answer to avoid further clicks
  document.getElementById('yesButton').disabled = true;
  document.getElementById('noButton').disabled = true;
}

// Send email notification
function sendEmailNotification() {
  const templateParams = {
    to_name: "Zaroo", // Replace with your name
    from_name: "Naima", // Replace with Naima's name
    message: "Naima said YES to the proposal!",
    reply_to: "abdulazizzaroo@gmail.com" // Your email address
  };

  // Send the email using EmailJS
  emailjs.send("Zaroo_aziz", "template_uknkz69", templateParams)
    .then(function(response) {
       console.log('Success:', response);
    }, function(error) {
       console.log('Failed:', error);
    });
}