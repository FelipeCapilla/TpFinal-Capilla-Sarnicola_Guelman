const categories = document.querySelector('.categories')
let categorias = ""

const texto = document.getElementById('buscar');
const invalidTexto =document.querySelector ('.invalido');
const forms = document.querySelector('.search-form')

fetch('https://dummyjson.com/recipes/tags')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  for(let i=0; i < data.length; i++){
    const categoria = data[i]
    let markUp = `
            <a class="cajita" href="category.html?cat=${categoria}">${categoria}</a>
            `;
            categorias += markUp
    }
    categories.innerHTML = categorias;  
})
.catch(function(error) {
  console.log("Error: ", error);
})

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
