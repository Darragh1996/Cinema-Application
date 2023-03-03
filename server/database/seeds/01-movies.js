let seed = (knex) => {
  return knex("movies")
    .del()
    .then(() => {
      return knex("movies").insert([
        {
          name: "Iron Man",
          rating: "PG-13",
          director: "Jon Favreau",
          runtime: 126,
          genre: "Action/Adventure",
          details: "Iron Man saves the day",
          trailer_url: "https://www.youtube.com/embed/8ugaeA-nMTc",
          img_poster_url:
            "https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
          img_landscape_url:
            "https://ae01.alicdn.com/kf/HTB1y4LcIuuSBuNjSsplq6ze8pXaN/DIY-frame-The-Amazing-Spider-Man-2-Sci-fi-Movie-Film-Poster-Fabric-Silk-Urban-Landscape.jpg_Q90.jpg_.webp",
        },
        {
          name: "Iron Man 2",
          rating: "PG-13",
          director: "Jon Favreau",
          runtime: 125,
          genre: "Action/Adventure",
          details: "Iron Man saves the day again",
          trailer_url: "https://www.youtube.com/embed/BoohRoVA9WQ",
          img_poster_url:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
          img_landscape_url:
            "http://4.bp.blogspot.com/-tEYlVjT07Co/T85rVvpzF7I/AAAAAAAABTM/82ax2gx0RYw/w1200-h630-p-k-no-nu/dark-knight-rises-poster.jpg",
        },
        {
          name: "Iron Man 3",
          rating: "PG-13",
          director: "Shane Black",
          runtime: 130,
          genre: "Action/Adventure",
          details: "Shocker - Iron Man saves the day again, again.",
          trailer_url: "https://www.youtube.com/embed/YLorLVa95Xo",
          img_poster_url:
            "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
          img_landscape_url:
            "http://4.bp.blogspot.com/-tEYlVjT07Co/T85rVvpzF7I/AAAAAAAABTM/82ax2gx0RYw/w1200-h630-p-k-no-nu/dark-knight-rises-poster.jpg",
        },
      ]);
    });
};

export { seed };
