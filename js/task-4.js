// Прослуховується подія submit
// Під час відправлення форми сторінка не перезавантажується
// Якщо при сабміті у формі є незаповнені поля, виводиться alert
// При сабміті в консоль виводиться об’єкт з двома властивостями, де ключі — це ім’я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях
// Після сабміту елементи форми очищаються

const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);
function handleSubmit(evt) {
    evt.preventDefault();
    const inputEmail = evt.currentTarget.elements.email.value.trim();
    const inputPassword = evt.currentTarget.elements.password.value.trim();
    if (inputEmail === "" || inputPassword === "") {
        alert('All form fields must be filled in!');
        return;
    }
    const data = {
        email: inputEmail,
        password: inputPassword
    }
    console.log(data);
    form.reset();
}