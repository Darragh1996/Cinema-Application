let seed = (knex) => {
  return knex("screens")
    .del()
    .then(() => {
      return knex("screens").insert([
        {
          colCount: 5,
          rowCount: 5,
        },
        {
          colCount: 3,
          rowCount: 2,
        },
      ]);
    });
};

export { seed };
