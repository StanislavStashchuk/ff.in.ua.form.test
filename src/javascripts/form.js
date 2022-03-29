// Load jQuery from NPM
import $ from 'jquery';

const name = document.querySelector('[name="name"]');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

document.querySelector('[type="submit"]')
    .addEventListener('click',(event)=> {
        event.preventDefault();

        console.log(name.value, email.value, message.value );
    });
    