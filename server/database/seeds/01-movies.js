let seed = (knex) => {
  return knex("movies")
    .del()
    .then(() => {
      return knex("movies").insert([
        {
          name: "Spider-Man 2",
          rating: "12",
          director: "Sam Raimi",
          runtime: 90,
          genre: "Action",
          details: "Spiderman fights Doc Oc.",
          trailer_url: "https://www.youtube.com/embed/1s9Yln0YwCw",
          img_poster_url:
            "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
          img_landscape_url:
            "https://ae01.alicdn.com/kf/HTB1y4LcIuuSBuNjSsplq6ze8pXaN/DIY-frame-The-Amazing-Spider-Man-2-Sci-fi-Movie-Film-Poster-Fabric-Silk-Urban-Landscape.jpg_Q90.jpg_.webp",
        },
        {
          name: "The Dark Knight",
          rating: "12A",
          director: "Christopher Nolan",
          runtime: 152,
          genre: "Action",
          details: "Batman fights people.",
          trailer_url: "https://www.youtube.com/embed/EXeTwQWrcwY",
          img_poster_url:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
          img_landscape_url:
            "http://4.bp.blogspot.com/-tEYlVjT07Co/T85rVvpzF7I/AAAAAAAABTM/82ax2gx0RYw/w1200-h630-p-k-no-nu/dark-knight-rises-poster.jpg",
        },
      ]);
    });
};

export { seed };
