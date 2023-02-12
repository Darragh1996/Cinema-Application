let seed = (knex) => {
  return knex("screens")
    .del()
    .then(() => {
      return knex("screens").insert([
        {
          colCount: 10,
          rowCount: 12,
        },
        {
          colCount: 20,
          rowCount: 14,
        },
        {
          colCount: 13,
          rowCount: 13,
        },
      ]);
    });
};

export { seed };
