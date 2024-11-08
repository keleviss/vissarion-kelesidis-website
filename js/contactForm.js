// AWS Function API URL
const apiUrl = 'https://xkj2mll5m7jiyjbhdr4kktlg3i0vjlhi.lambda-url.eu-central-1.on.aws/';

// Form Element
const contactForm = document.getElementById('contact-form');

contactForm.onsubmit = async function (event) {
  event.preventDefault();

  const name = event.target.name.value;
  const email = event.target.email.value;
  const subject = event.target.subject.value;
  const message = event.target.message.value;

  const body = JSON.stringify({ name, email, subject, message });

  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

};