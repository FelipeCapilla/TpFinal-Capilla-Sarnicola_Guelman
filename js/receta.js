let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)
let id = queryStringObj.get("id")
console.log(id)

const receta = document.querySelector(".receta")
let receta_Seleccionada = ""

fetch(`https://dummyjson.com/recipes/${id}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
    let tagsLinks = ""

    for(i = 0; i < data.tags.length; i++){
      tagsLinks += `<a href="category.html?cat=${data.tags[i]}">${data.tags[i]}</>`
    }
    let markUp = `
            <article>
                <h1>${data.name}</h1>
                <p>Instrucciones: ${data.instructions}</p>
                <p>Tiempo de cocción: ${data.prepTimeMinutes}</p>          
                <img src=${data.image} alt= ${data.name}>
                ${tagsLinks}
            </article>
            `;
            receta.innerHTML = markUp
})
.catch(function(error) {
  console.log("Error: ", error);
})
