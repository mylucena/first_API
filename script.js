function searchMovie() {
    const movieName = document.getElementById('movieInput').value;
    const apiKey = '5c66af9b';  
    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                document.getElementById('movieDetails').innerHTML = `
                    <h2>${data.Title} (${data.Year})</h2>
                    <p><strong>Diretor:</strong> ${data.Director}</p>
                    <p><strong>Elenco:</strong> ${data.Actors}</p>
                    <p><strong>Sinopse:</strong> ${data.Plot}</p>
                    <img src="${data.Poster}" alt="${data.Title} Poster" style="width:200px; margin-top:20px;">
                `;
            } else {
                document.getElementById('movieDetails').innerHTML = '<p>Filme não encontrado. Tente novamente.</p>';
            }
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}
