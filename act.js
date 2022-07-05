let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form');

function validateInput() {
  // firstname
  if (fname.value.trim() === '') {
    onError(fname, 'First Name cannot be empty');
  } else {
    onSuccess(fname);
  }

  //   last name
  if (lname.value.trim() === '') {
    onError(lname, 'Last Name cannot be empty');
  } else {
    onSuccess(lname);
  }

  //   email
  if (email.value.trim() === '') {
    onError(email, 'Looks like this is not an email');
  } else {
    if (!isvalidEmail(email.value.trim())) {
      onError(email, 'email is not valid');
    } else {
      onSuccess(email);
    }
  }

  //   password
  if (password.value.trim() === '') {
    onError(password, 'Password cannot be empty');
  } else {
    onSuccess(password);
  }
}

document.querySelector('button').addEventListener('click', (event) => {
  event.preventDefault();
  validateInput();
});

function onSuccess(input) {
  let parent = input.parentElement;
  let message = parent.querySelector('div');
  message.style.visibility = 'hidden';
  message.innerText = '';
  parent.classList.remove('error');
  parent.classList.add('success');
}

function onError(input, emessage) {
  let parent = input.parentElement;
  let message = parent.querySelector('div');
  message.style.visibility = 'visible';
  message.innerText = emessage;
  parent.classList.add('error');
  parent.classList.remove('success');
}

function isvalidEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
