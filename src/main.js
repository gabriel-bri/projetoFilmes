import data from './data/movies/movies.json' assert { type: 'json' };

console.log(data); 

function displayMovies(data) {
    const movieContainer = document.getElementById('movie-container');
    
    data.forEach(({ Title, Poster }) => {
        const card = document.createElement('div');
        card.classList.add('cardFrente');
        
        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = Title;
        card.appendChild(title);
        
        const image = document.createElement('img');
        image.src = Poster;
        image.alt = Title;
        card.appendChild(image);
        
        movieContainer.appendChild(card);
    });
}

displayMovies(data);
