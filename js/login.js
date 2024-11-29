const form = document.querySelector('.login_form')
const email = document.getElementById('email');
const password = document.getElementById('password');

const invalidEmail =document.querySelector ('.email ');
const invalidPassword = document.querySelector ('.password');

const texto = document.getElementById('texto');
const invalidTexto =document.querySelector ('.texto ');
const forms = document.querySelector('.search_form')

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

forms.addEventListener('submit', function (event) {
    event.preventDefault();
  
    let errors = false;
    console.log('erro', errors)
    if (texto.value.length < 3) {
        invalidTexto.innerText = 'Escriba al menos 3 caracteres';
        invalidTexto.style.display = 'block';
        errors = true;
    } else {
        invalidTexto.style.display = 'none';
    }
    if (!errors) {
        this.submit();
    }
  });