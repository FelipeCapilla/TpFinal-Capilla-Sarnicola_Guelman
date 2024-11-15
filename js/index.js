const home = document.querySelector('.home')
let homes = ""
const boton = document.querySelector("#cargar")

fetch('https://dummyjson.com/recipes')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for(let i=0; i < 20; i++){
    const recetas = data.recipes[i]
    let markUp = `
            <article>
                <img src=${recetas.image} alt= ${recetas.name}>
                <p>${recetas.name}</p>
                <p>Nivel de dificultad: ${recetas.difficulty}</p>
                <a href=receta.html?id=${recetas.id}> Ir al detalle </a>
             </article>
            `;
            homes += markUp
    }
    home.innerHTML = homes;  
  
    boton.addEventListener("click", function(){
      for(let i = 20; i < 30; i++){
        const recetas2 = data.recipes[i]
        let markUp2 = `
        <article>
          <img src=${recetas2.image} alt= ${recetas2.name}>
          <p>${recetas2.name}</p>
          <p>Nivel de dificultad: ${recetas2.difficulty}</p>
          <a href=receta.html?id=${recetas2.id}> Ir al detalle </a>
        </article>
        `;
        homes += markUp2
      }
      boton.style.display = "none"
      home.innerHTML = homes
    })
})
.catch(function(error) {
  console.log("Error: ", error);
})


