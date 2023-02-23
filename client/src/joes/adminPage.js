let tableInnerHTML = '<tr><th>Title</th><th>Date</th><th>Director</th><th>Genre</th><th></th></tr>';

const readMoviesTable = document.getElementById('readMoviesTable');

let sampleMovie = {
    title: 'Ant-man and the Wasp: Quantumania',
    director: 'Peyton Reed', 
    runtime: 125, 
    genre: 'Science Fiction',
    trailerURL: 'https://www.youtube.com/watch?v=ZlNFpri-Y40&t=2s', 
    releaseDate: '2023-02-17', 
    posterURL: 'C:/Users/foyjo/OneDrive - Atlantic TU/Semester 6/Team Project/img/Ant-Man and the Wasp Official Poster.jpg',
    movieId: 1
}


let movieObjectsArray = [sampleMovie]//// get movies into an array



movieObjectsArray.forEach(thisMovie => {
    tableInnerHTML+=(`<tr><td>${thisMovie.title}</td><td>${thisMovie.releaseDate}</td><td>${thisMovie.director}</td><td>${thisMovie.genre}</td><td><button action="form.html" type="submit" value="${thisMovie.movieId}" id="${thisMovie.movieId}">Edit</button></td></tr>`)
    // refine this line above
    document.getElementById(thisMovie.movieId).addEventListener('click', (event) => {
        event.preventDefault();
       
        window.location = 'form.html'
        // Add code 
    });
});

readMoviesTable.innerHTML = tableInnerHTML;