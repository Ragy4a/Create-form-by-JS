'use strict';

// Basis
const themeBody = document.body;
console.log(themeBody);


const div = document.createElement('div');
div.classList.add('main-container');
themeBody.prepend(div);
console.log(div);
// Basis end
// Header
const header = document.createElement('div');
header.classList.add('form-header');
div.append(header);
const h1 = document.createElement('h1');
h1.textContent = 'CREATE AN ACCOUNT';
header.append(h1);
const par = document.createElement('p');
par.textContent = 'We always keep your name and email address private.';
header.append(par);
// Header-end
// Form
const formContainer = document.createElement('div');
formContainer.classList.add('form-container');
div.append(formContainer);
const form = document.createElement('form');
formContainer.append(form);
// Wrapper Container
const wrapperContainer = document.createElement('div');
wrapperContainer.classList.add('wrapper-container');
form.append(wrapperContainer);
const firstInputContainer = document.createElement('div');
firstInputContainer.classList.add('input-container');
const secondInputContainer = firstInputContainer.cloneNode();
wrapperContainer.append(firstInputContainer);
wrapperContainer.append(secondInputContainer);
// Inputs
// First Input Container
const inputFirstName = document.createElement('input');
inputFirstName.setAttribute('type', 'text');
inputFirstName.setAttribute('name', 'first-name');
inputFirstName.setAttribute('id', 'first-name');
inputFirstName.setAttribute('placeholder', 'First Name');
firstInputContainer.append(inputFirstName);
const inputDisplayName = document.createElement('input');
inputDisplayName.setAttribute('type', 'text');
inputDisplayName.setAttribute('name', 'display-name');
inputDisplayName.setAttribute('id', 'display-name');
inputDisplayName.setAttribute('placeholder', 'Display Name');
firstInputContainer.append(inputDisplayName);
const inputPassword = document.createElement('input');
inputPassword.setAttribute('type', 'password');
inputPassword.setAttribute('name', 'password');
inputPassword.setAttribute('id', 'password');
inputPassword.setAttribute('placeholder', 'Password');
firstInputContainer.append(inputPassword)
// Second Input Container
const inputSecondName = document.createElement('input');
inputSecondName.setAttribute('type', 'text');
inputSecondName.setAttribute('name', 'second-name');
inputSecondName.setAttribute('id', 'second-name');
inputSecondName.setAttribute('placeholder', 'Second Name');
secondInputContainer.append(inputSecondName);
const inputEmail = document.createElement('input');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('name', 'email');
inputEmail.setAttribute('id', 'email');
inputEmail.setAttribute('placeholder', 'Email Adress');
secondInputContainer.append(inputEmail);
const inputPasswordConfirm = document.createElement('input');
inputPasswordConfirm.setAttribute('type', 'password');
inputPasswordConfirm.setAttribute('name', 'password');
inputPasswordConfirm.setAttribute('id', 'password-confirmation');
inputPasswordConfirm.setAttribute('placeholder', 'Password Confirmation');
secondInputContainer.append(inputPasswordConfirm);
// Wrapper Container end
// Radio Container
const radioContainer = document.createElement('div');
radioContainer.classList.add('radio-container');
form.append(radioContainer);
const firstContainer = document.createElement('div');
firstContainer.classList.add('container');
radioContainer.append(firstContainer);
const firstRadioInnerContainer = document.createElement('div');
firstRadioInnerContainer.classList.add('radio-inner-container');
firstContainer.append(firstRadioInnerContainer);
const inputRadio = document.createElement('input');
inputRadio.setAttribute('type', 'radio');
inputRadio.setAttribute('name', 'radio');
inputRadio.setAttribute('id', 'user-buyer');
firstRadioInnerContainer.append(inputRadio);
const labelRadio = document.createElement('label');
labelRadio.setAttribute('for', 'user-buyer');
labelRadio.textContent = 'Join As a Buyer';
firstRadioInnerContainer.append(labelRadio);
const radioPar = document.createElement('p');
radioPar.textContent = 'I am looking for a Name, Logo or Taglline for my buisiness, brand or product.';
firstContainer.append(radioPar);
const secondContainer = firstContainer.cloneNode();
radioContainer.append(secondContainer);
const secondRadioInnerContainer = firstRadioInnerContainer.cloneNode();
secondContainer.append(secondRadioInnerContainer);
const inputUserSeller = document.createElement('input');
inputUserSeller.setAttribute('type', 'radio');
inputUserSeller.setAttribute('id', 'user-seller');
secondRadioInnerContainer.append(inputUserSeller);
const labelUserSeller = document.createElement('label');
labelUserSeller.setAttribute('for', 'user-seller');
labelUserSeller.textContent = 'Join As a Creative or Marketplace Seller';
secondRadioInnerContainer.append(labelUserSeller);
const secondRadioPar = radioPar.cloneNode();
secondRadioPar.textContent = 'I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.';
secondContainer.append(secondRadioPar);
// Radio Container end
// Checkbox container
const checkboxContainer = document.createElement('div');
checkboxContainer.classList.add('checkbox-container');
radioContainer.append(checkboxContainer);
const inputCheckbox = document.createElement('input');
inputCheckbox.setAttribute('type', 'checkbox');
inputCheckbox.setAttribute('name', 'checkbox');
inputCheckbox.setAttribute('id', 'checkbox');
checkboxContainer.append(inputCheckbox);
const labelCheckbox = document.createElement('label');
labelCheckbox.setAttribute('for', 'checkbox');
labelCheckbox.textContent = 'Allow Squadhelp to send marketing/promotional offers from time to time';
checkboxContainer.append(labelCheckbox);
// Checkbox container end
// Button container
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('button-container');
radioContainer.append(buttonContainer);
const inputButton = document.createElement('input');
inputButton.setAttribute('class', 'button-submit');
inputButton.setAttribute('type', 'submit');
inputButton.setAttribute('value', 'Create account');
buttonContainer.append(inputButton);
// Button container end
// Inputs-end
// Form-end