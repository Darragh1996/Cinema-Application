let toEdit = true;

//import { movieToEdit } from ___File;// Get the movie to edit from the database

const movieFormObject = document.getElementById('movieForm');

let sampleMovie = {
    movieName: 'Ant-man and the Wasp: Quantumania',
    director: 'Peyton Reed', 
    runtime: 125, 
    genre: 'Science Fiction',
    trailerURL: 'https://www.youtube.com/watch?v=ZlNFpri-Y40&t=2s', 
    releaseDate: '2023-02-17', 
    posterURL: 'C:/Users/foyjo/OneDrive - Atlantic TU/Semester 6/Team Project/img/Ant-Man and the Wasp Official Poster.jpg'
}

let movieToEdit = sampleMovie;

if(!toEdit){//function for saving new movies
    try {
        movieFormObject.removeEventListener();
    } catch (error) {
        console.log(error);
    }
    movieFormObject.addEventListener('submit', (event) => {
        event.preventDefault();
    
        let movieName = document.getElementById('movieName').value;
        let director = document.getElementById('director').value;
        let runtime = document.getElementById('runtime').value;
        let genre = document.getElementById('genre').value;
        let trailerURL = document.getElementById('trailerURL').value;
        let releaseDate = document.getElementById('releaseDate').value;
        let posterURL = document.getElementById('posterURL').value;
    
        // Add code to submit the new movie entry to the database




    });
}
else{
    // Populate form to edit specific movie
    document.getElementById('movieName').value = movieToEdit.movieName;
    document.getElementById('director').value = movieToEdit.director;
    document.getElementById('runtime').value = movieToEdit.runtime;
    document.getElementById('genre').value = movieToEdit.genre;
    document.getElementById('trailerURL').value = movieToEdit.trailerURL;
    document.getElementById('releaseDate').value = movieToEdit.releaseDate;
    document.getElementById('posterURL').value = movieToEdit.posterURL;

    
    try {
        movieFormObject.removeEventListener();
    } catch (error) {
        console.log(error);
    }
    movieFormObject.addEventListener('submit', (event) => {
        event.preventDefault();
    
        let movieName = document.getElementById('movieName').value;
        let director = document.getElementById('director').value;
        let runtime = document.getElementById('runtime').value;
        let genre = document.getElementById('genre').value;
        let trailerURL = document.getElementById('trailerURL').value;
        let releaseDate = document.getElementById('releaseDate').value;
        let posterURL = document.getElementById('posterURL').value;
    
        // Add code to submit the new movie entry to the database
        



    });
}

//  function:
//  save new movie from form
//  populate form to edit
//  edit movie 