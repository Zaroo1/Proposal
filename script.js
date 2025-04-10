// Form submission handling
document.getElementById('naimaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  fetch(this.action, {
    method: 'POST',
    body: new FormData(this),
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      document.getElementById('sentMessage').style.display = 'block';
      document.getElementById('response').disabled = true;
      showHeartsAndButterflies();
    } else {
      alert('Oops! Something went wrong.');
    }
  });
});

// Function to generate flying butterflies
const butterflyContainer = document.querySelector('.butterflies');
const emoji = "🦋";

for (let i = 0; i < 15; i++) {
  const span = document.createElement('span');
  span.classList.add('butterfly');
  span.innerText = emoji;
  span.style.top = `${Math.random() * 100}%`;
  span.style.left = `${Math.random() * 100}%`;
  span.style.animationDelay = `${Math.random() * 10}s`;
  butterflyContainer.appendChild(span);
}

// Function to show hearts and butterflies after submission
function showHeartsAndButterflies() {
  // Create heart elements
  const heart1 = document.createElement('div');
  heart1.classList.add('heart', 'heart-1');
  document.body.appendChild(heart1);

  const heart2 = document.createElement('div');
  heart2.classList.add('heart', 'heart-2');
  document.body.appendChild(heart2);

  const heart3 = document.createElement('div');
  heart3.classList.add('heart', 'heart-3');
  document.body.appendChild(heart3);

  // Make hearts visible after submission
  setTimeout(() => {
    heart1.style.opacity = 1;
    heart2.style.opacity = 1;
    heart3.style.opacity = 1;
  }, 500);
}