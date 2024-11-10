// AWS Function API URL
const apiUrl = 'https://xkj2mll5m7jiyjbhdr4kktlg3i0vjlhi.lambda-url.eu-central-1.on.aws/';

// Form Element
const contactForm = document.getElementById('contact-form');

function displayPopup(status) {
  const popup = document.getElementById(status);
  const popupBackground = popup.parentElement;
  popup.style.display = 'flex';
  popupBackground.style.display = 'block';

  const popupCloseBtn = popup.querySelector('button');
  popupCloseBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    popupBackground.style.display = 'none';
  });
}

contactForm.onsubmit = async function (event) {
  event.preventDefault();

  const pageName = event.target.name.value;
  const email = event.target.email.value;
  const subject = event.target.subject.value;
  const message = event.target.message.value;

  const body = JSON.stringify({ pageName, email, subject, message });

  // Asynchronous fetch call with input clearing upon completion
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    const data = await response.json();
    console.log(data);

    // Clear inputs after fetch completion
    const inputs = document.querySelectorAll("#name, #email, #subject, #message");
    inputs.forEach(input => input.value = "");
    displayPopup('success');

  } catch (error) {
    console.error('Error:', error);
    displayPopup('error');
  }
};