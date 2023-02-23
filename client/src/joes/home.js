let moviePosterTrio = document.getElementById('moviePosterTrio');



for (let index = 0; index < 3; index++) {
    let trioPoster = document.createElement('div');
    trioPoster.className = "trioPoster";
    trioPoster.style.backgroundImage = 'url("./img/postertall.png")';

    let container = document.createElement('div');
    container.className = "container";

    let trioMovieTitle = document.createElement('h4');
    trioMovieTitle.className = "trioMovieTitle";
    trioMovieTitle.innerHTML = "Ant-man & the Wasp: Quantumania";

    let bookNowButton = document.createElement('button');
    bookNowButton.className = "bookNowButton";
    bookNowButton.innerHTML = 'Book Now'

    console.log(trioMovieTitle)

    container.append(trioMovieTitle);
    container.append(bookNowButton);

    trioPoster.append(container);

    moviePosterTrio.append(trioPoster);
    
}
