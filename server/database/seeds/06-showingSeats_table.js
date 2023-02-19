let seed = (knex) => {
  return knex("showingSeats")
    .del()
    .then(() => {
      return knex("showingSeats").insert([
        //next row
        {
          seatID: 1,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 2,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 3,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 4,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 5,
          showingID: 1,
          occupied: false,
        },
        //next row
        {
          seatID: 6,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 7,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 8,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 9,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 10,
          showingID: 1,
          occupied: false,
        },
        //next row
        {
          seatID: 11,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 12,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 13,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 14,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 15,
          showingID: 1,
          occupied: false,
        },
        //next row
        {
          seatID: 16,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 17,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 18,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 19,
          showingID: 1,
          occupied: true,
        },
        {
          seatID: 20,
          showingID: 1,
          occupied: true,
        },
        //next row
        {
          seatID: 21,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 22,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 23,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 24,
          showingID: 1,
          occupied: false,
        },
        {
          seatID: 25,
          showingID: 1,
          occupied: false,
        },
        //next showing
        {
          seatID: 26,
          showingID: 2,
          occupied: false,
        },
        {
          seatID: 27,
          showingID: 2,
          occupied: false,
        },
        {
          seatID: 28,
          showingID: 2,
          occupied: false,
        },
        //next row
        {
          seatID: 29,
          showingID: 2,
          occupied: false,
        },
        {
          seatID: 30,
          showingID: 2,
          occupied: false,
        },
        {
          seatID: 31,
          showingID: 2,
          occupied: false,
        },
      ]);
    });
};

export { seed };
