let seed = (knex) => {
  return knex("bookings")
    .del()
    .then(() => {
      return knex("bookings").insert([
        {
          userID: 1,
          showingID: 1,
          seatID: 1,
        },
        {
          userID: 1,
          showingID: 1,
          seatID: 2,
        },
        {
          userID: 1,
          showingID: 2,
          seatID: 1,
        },
        {
          userID: 1,
          showingID: 2,
          seatID: 2,
        },
      ]);
    });
};

export { seed };
