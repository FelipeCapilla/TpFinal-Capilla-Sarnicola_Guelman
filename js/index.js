const home = document.querySelector('.home')
let homes = ""
const boton = document.querySelector("#cargar")
let skip = 0
const texto = document.getElementById('texto');
const invalidTexto =document.querySelector ('.texto ');
const form = document.querySelector('.search_form')

function getRecipes(){
  fetch(`https://dummyjson.com/recipes?limit=10&skip=${skip}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for(let i=0; i < 10; i++){
    const recetas = data.recipes[i]
    let markUp = `
            <article>
                <img src=${recetas.image} alt= ${recetas.name}>
                <p>${recetas.name}</p>
                <p>Nivel de dificultad: ${recetas.difficulty}</p>
                <a class="detalle" href=receta.html?id=${recetas.id}> Ir al detalle </a>
             </article>
            `;
            homes += markUp
    }
    home.innerHTML = homes;    
})
.catch(function(error) {
  console.log("Error: ", error);
})
}

getRecipes()

boton.addEventListener("click", function(){
  skip += 10
  getRecipes()
})


form.addEventListener('submit', function (event) {
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
