// Load jQuery from NPM
import $ from 'jquery';

const name = document.querySelector('[name="name"]');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

document.querySelector('[type="submit"]')
  .addEventListener('click', (event) => {
    event.preventDefault();

    console.log(name.value, email.value, message.value);

    $.ajax({
      method: 'POST',
      url: 'https://dynamic-pixie-49c48e.netlify.app/.netlify/functions/email',
      data: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value
      })
    });
  });
