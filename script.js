// Initialize EmailJS with your Public Key
(function () {
  emailjs.init("JyJ9vd05ydbsnuQqU"); // Your actual EmailJS Public Key
})();

function showAnswer(answer) {
  const answerDiv = document.getElementById('answer');
  
  if (answer === 'yes') {
    answerDiv.innerHTML = "She said YES! Let's grow together and see where life takes us!";
    sendEmailNotification(); // Send email on Yes
  } else {
    answerDiv.innerHTML = "No matter what, I'll always cherish you.";
  }

  document.getElementById('yesButton').disabled = true;
  document.getElementById('noButton').disabled = true;
}

function sendEmailNotification() {
  const templateParams = {
    to_name: "Aziz", // Your name
    from_name: "Naima",
    message: "Naima clicked YES — she’s ready to grow with you!",
    reply_to: "abdulazizzaroo@gmail.com" // Your email address
  };

  // Send the email using EmailJS with your Service ID and Template ID
  emailjs.send("service_wghqy1l", "template_uknkz69", templateParams)
    .then(function(response) {
      console.log('Email sent successfully!', response);
    }, function(error) {
      console.log('Email failed to send:', error);
    });
}