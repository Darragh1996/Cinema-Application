let seed = (knex) => {
  return knex("showings")
    .del()
    .then(() => {
      return knex("showings").insert([
        {
          movieID: 1,
          screenID: 1,
          datetime: knex.fn.now(6),
        },
        {
          movieID: 2,
          screenID: 2,
          datetime: knex.fn.now(6),
        },
        {
          movieID: 1,
          screenID: 1,
          datetime: knex.fn.now(6),
        },
      ]);
    });
};

export { seed };
