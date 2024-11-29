let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get("id")
console.log(id)

const receta = document.querySelector(".receta")
let receta_Seleccionada = ""

const texto = document.getElementById('buscar');
const invalidTexto =document.querySelector ('.invalido');
const forms = document.querySelector('.search-form')

fetch(`https://dummyjson.com/recipes/${id}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
    let tagsLinks = ""

    for(i = 0; i < data.tags.length; i++){
      tagsLinks += `<a class="tag" href="category.html?cat=${data.tags[i]}">${data.tags[i]}</a>`
    }
    let markUp = `
            <article>
                <h1>${data.name}</h1>
                <p>Instrucciones: ${data.instructions}</p>
                <p>Tiempo de cocción: ${data.prepTimeMinutes}</p>          
                <img src=${data.image} alt= ${data.name}>
                <h3>categorías</h3>
                ${tagsLinks}
            </article>
            `;
            receta.innerHTML = markUp
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
