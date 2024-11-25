let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let cat = queryStringObj.get("cat")

const category = document.querySelector(".category")
const titulo = document.querySelector(".titulo")
let categoria = ""

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
            <p>${cate.name}</p>
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