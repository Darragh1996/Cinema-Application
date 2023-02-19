let seed = (knex) => {
  return knex("bookings")
    .del()
    .then(() => {
      return knex("bookings").insert([
        {
          userID: 1,
          showingID: 1,
          showingSeatID: 1,
        },
        {
          userID: 1,
          showingID: 1,
          showingSeatID: 2,
        },
        {
          userID: 1,
          showingID: 2,
          showingSeatID: 1,
        },
        {
          userID: 1,
          showingID: 2,
          showingSeatID: 2,
        },
      ]);
    });
};

export { seed };
