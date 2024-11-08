const home = document.querySelector('.home')
let homes = ""

fetch('https://dummyjson.com/recipes')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for(let i=0; i < data.recipes.length; i++){
    const recetas = data.recipes[i]
    let markUp = `
            <article>
                <img src=${recetas.image} alt= ${recetas.name}>
                <p>Name: ${recetas.name}</p>
                <p>Status:${recetas.status}</p>
             </article>
            `;
            homes += markUp
    }
    home.innerHTML = homes;  
})
.catch(function(error) {
  console.log("Error: ", error);
})


