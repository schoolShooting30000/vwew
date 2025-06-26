document.getElementById('registrationForm').addEventListener('submit', function(e) {
e.preventDefault(); // Предотвращаем отправку формы
clearErrors();
const username = document.getElementById('username').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value;
let isValid = true;
// Проверка имени пользователя
if (username === '') {
  showError('error-username', 'Пожалуйста, введите имя пользователя.');
  isValid = false;
}
// Проверка email
if (email === '') {
  showError('error-email', 'Пожалуйста, введите электронную почту.');
  isValid = false;
} else if (!validateEmail(email)) {
  showError('error-email', 'Некорректный формат электронной почты.');
  isValid = false;
}
// Проверка пароля
if (password.length <6) {
  showError('error-password', 'Пароль должен быть не менее 6 символов.');
  isValid = false;
}
if (isValid) {
  alert('Регистрация прошла успешно!');
  document.getElementById('registrationForm').reset();
}
});

function showError(elementId, message) {
 document.getElementById(elementId).textContent = message;
}

function clearErrors() {
 const errorElements = document.querySelectorAll('.error');
 errorElements.forEach(function(el) {
   el.textContent = '';
 });
}

function validateEmail(email) {
 const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 return re.test(email.toLowerCase());
}