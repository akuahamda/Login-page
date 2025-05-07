let form = document.getElementById('loginForm');



function formValidation(event) {
  event.preventDefault();

  let nameInput = document.getElementById('email').value;

  let passwordInput = document.getElementById('password').value;

  let userEmail = 'dekin@gmail.com';
  let userPassword = 'dekin@1234';

  if (nameInput === userEmail && passwordInput === userPassword) {
    window.location.replace('welcome.html')
  } else {
    alert('Incorrect Credential 😎');
  };
};

form.addEventListener('submit', formValidation);

