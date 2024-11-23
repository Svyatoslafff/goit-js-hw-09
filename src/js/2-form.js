'use strict'

import validator from 'validator';

const formData = {
    email: '',
    message: '',
};

const form = {
    formItem: document.querySelector('.feedback-form'),
    emailInput: document.querySelector('input[name = email]'),
    messageTextarea: document.querySelector('textarea[name = message]'),

    toLocalStorage(event) {
        if (event.srcElement.localName === 'input') {
            formData.email = event.srcElement.value
        };
        if (event.srcElement.localName === 'textarea'){
            formData.message = event.srcElement.value 
        };

        localStorage.setItem('feedback-form-state', JSON.stringify(formData))
    },
    formSubmit(event) {
        event.preventDefault();
        if (form.emailInput.value === '' || form.messageTextarea.value === '') {
            alert('Fill please all fields');
            return
        }
        if (!(validator.isEmail(form.emailInput.value))) {
            alert('Incorrect email');
            return
        }
        
        console.log(formData);
        form.emailInput.value = '';
        form.messageTextarea.value = '';
        
        formData.email = '';
        formData.message = '';
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
}

const formState = JSON.parse(localStorage.getItem('feedback-form-state'));

if (formState.email || formState.message) {
    form.emailInput.value= formState.email;
    form.messageTextarea.value = formState.message;

    formData.email = formState.email;
    formData.message = formState.message;
}

form.formItem.addEventListener('input', form.toLocalStorage);
form.formItem.addEventListener('submit', form.formSubmit);