const form = document.querySelector('.login_form')
const email = document.getElementById('email');
const password = document.getElementById('password');

const invalidEmail =document.querySelector ('.email ');
const invalidPassword = document.querySelector ('.password');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let errors = false;
    console.log('erro', errors)
    if (email.value === '') {
        invalidEmail.innerText = 'No se completo el email';
        invalidEmail.style.display = 'block';
        errors = true;
    } else {
        invalidEmail.style.display = 'none';
    }
    if (password.value === '') {
        invalidPassword.innerText = 'No se completo la contraseña';
        invalidPassword.style.display = 'block';
        errors = true;
    } else {
        invalidEmail.style.display = 'none';
    }
    if (!errors) {
        this.submit();
    }
});