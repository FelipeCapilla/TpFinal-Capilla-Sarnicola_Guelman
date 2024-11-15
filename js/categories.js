const categories = document.querySelector('.categories')
let categorias = ""

fetch('https://dummyjson.com/recipes/tags')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  for(let i=0; i < data.length; i++){
    const categoria = data[i]
    let markUp = `
            <a href="category.html?cat=${categoria}">${categoria}</a>
            `;
            categorias += markUp
    }
    categories.innerHTML = categorias;  
})
.catch(function(error) {
  console.log("Error: ", error);
})
