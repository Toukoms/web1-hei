const TRUE_EMAIL = "test@mail.hei.school"
const TRUE_PWD = "admin"
const loginForm = document.getElementById('login-form');
const inputEmail = document.getElementById('email');
const inputPwd = document.getElementById('password');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = inputEmail.value
  const pwd = inputPwd.value
  if (email === TRUE_EMAIL && pwd === TRUE_PWD) {
    alert('Logged in')
  } else {
    alert('Incorrect email ou password')
  }
});


