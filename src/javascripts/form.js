// Load jQuery from NPM
import $ from 'jquery';

const successMessage = document.querySelector('.success-message');
const form = document.querySelector('[name="contact"]');
const name = document.querySelector('[name="name"]');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

document.querySelector('[type="submit"]')
  .addEventListener('click', (event) => {
    event.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
      alert('email not valid');
      return;
    }

    $.ajax({
      method: 'POST',
      url: 'https://dynamic-pixie-49c48e.netlify.app/.netlify/functions/email',
      data: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    })
      .done(() => {
        name.value = '';
        email.value = '';
        message.value = '';

        form.style.display = 'none';

        setTimeout(() => {
          form.style.display = 'block';
          successMessage.style.display = 'none';
        }, 3000);
      })
      .fail(() => {
        alert('Fail');
      });
  });
