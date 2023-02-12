let seed = (knex) => {
  return knex("seats")
    .del()
    .then(() => {
      return knex("seats").insert([
        {
          rowID: 0,
          colID: 0,
          screenID: 1,
          occupied: false,
          aisle: false,
        },
        {
          rowID: 0,
          colID: 1,
          screenID: 1,
          occupied: false,
          aisle: false,
        },
        {
          rowID: 0,
          colID: 2,
          screenID: 1,
          occupied: true,
          aisle: false,
        },
        {
          rowID: 0,
          colID: 3,
          screenID: 1,
          occupied: true,
          aisle: false,
        },
      ]);
    });
};

export { seed };
