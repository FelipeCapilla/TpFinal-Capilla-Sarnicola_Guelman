const email = document.getElementById ('email');
const password = document.getElementById ('password');

const invalidEmail =document.querySelector ('.email ');
const invalidPassword = document.getElementById ('.password');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let errors = false ;

    if (email.value === '') {
        invalidEmail.innerText = 'no se completo el email';
        invalidEmail.style.display = 'block';
        errors = true;
    } else {
        invalidEmail.style.display = 'none';
    }
    if (password.value === '') {
        invalidPassword.innerText = 'no se completo la contraseña';
        invalidPassword.style.display = 'block';
        errors = true;
    } else {
        invalidEmail.style.display = 'none';
    }
    if (!errors) {
        this.submit ();
    }
});