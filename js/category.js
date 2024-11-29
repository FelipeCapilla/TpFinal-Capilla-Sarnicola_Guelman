let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let cat = queryStringObj.get("cat")

const category = document.querySelector(".category")
const titulo = document.querySelector(".titulo")
let categoria = ""

const texto = document.getElementById('buscar');
const invalidTexto =document.querySelector ('.invalido');
const forms = document.querySelector('.search-form')

fetch(`https://dummyjson.com/recipes/tag/${cat}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for(let i=0; i < data.recipes.length; i++){
    const cate = data.recipes[i]
    let markUp = `
        <article>
            <img src=${cate.image} alt= ${cate.name}>
            <h3>${cate.name}</h3>
            <p>Nivel de dificultad: ${cate.difficulty}</p>
            <a class="detalle" href=receta.html?id=${cate.id}> Ir al detalle </a>
        </article>
        `;
        categoria += markUp
    }
    category.innerHTML = categoria;  
    titulo.innerText = cat
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