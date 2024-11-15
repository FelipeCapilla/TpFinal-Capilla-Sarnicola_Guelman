let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let cat = queryStringObj.get("cat")

const category = document.querySelector(".category")
let categoria = ""

fetch('https://dummyjson.com/recipes/tag/Pakistani')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for(let i=0; i < data.recipes.length; i++){
    const cat = data.recipes[i]
    let markUp = `
        <article>
            <img src=${cat.image} alt= ${cat.name}>
            <p>${cat.name}</p>
            <p>Nivel de dificultad: ${cat.difficulty}</p>
            <a href=receta.html?id=${cat.id}> Ir al detalle </a>
        </article>
        `;
        categoria += markUp
    }
    category.innerHTML = categoria;  
})
.catch(function(error) {
  console.log("Error: ", error);
})