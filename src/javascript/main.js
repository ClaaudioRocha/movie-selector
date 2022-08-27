const top250Movies = "https://imdb-api.com/en/API/Top250Movies/k_km3spol9"


function getMovies(){
    axios.get(top250Movies)
    .then(response => {
    const data = response.data;
    renderResults.textContent = JSON.stringify(data)      
    })
    .catch(e => console.log(e))
}
getMovies()