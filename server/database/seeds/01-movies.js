let seed = (knex) => {
  return knex("movies")
    .del()
    .then(() => {
      return knex("movies").insert([
        {
          name: "Spider-Man 2",
          rating: "12",
          director: "Sam Raimi",
          cast: "Toby Maguie",
          runtime: 90,
          genre: "Action",
          price: 8.5,
        },
        {
          name: "Oppenheimer",
          rating: "18",
          director: "Christopher Nolan",
          cast: "Cillian Murphy",
          runtime: 90,
          genre: "Historic",
          price: 8.5,
        },
      ]);
    });
};

export { seed };
