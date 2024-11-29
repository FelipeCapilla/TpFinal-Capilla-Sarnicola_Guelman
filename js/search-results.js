let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let bus = queryStringObj.get("search")
let noResults = document.querySelector('.no_results')

let seccion = document.querySelector(".busqueda")
let titulo = document.querySelector(".titulo")

const texto = document.getElementById('buscar');
const invalidTexto = document.querySelector ('.invalido');
const forms = document.querySelector('.search-form')


console.log(bus)
fetch(`https://dummyjson.com/recipes/search?q=${bus}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    console.log(data)
  
  for(let i=0; i < data.recipes.length; i++){
    let cate = data.recipes[i]
    console.log(cate)
    let markUp = `
        <article>
            <img src=${cate.image} alt= ${cate.name}>
            <h1 class="tit">${cate.name}</h1>
            <a class="detalle" href=receta.html?id=${cate.id}> Ir al detalle </a>
        </article>
        `;
        seccion.innerHTML += markUp
    }
    if( data.recipes.length === 0){
      noResults.style.display = 'block'
    }
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
