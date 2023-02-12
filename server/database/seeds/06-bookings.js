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
      ]);
    });
};

export { seed };
