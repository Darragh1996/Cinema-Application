let seed = (knex) => {
  return knex("seats")
    .del()
    .then(() => {
      return knex("seats").insert([
        //next row
        {
          rowID: 0,
          colID: 0,
          screenID: 1,
          aisle: false,
        },
        {
          rowID: 0,
          colID: 1,
          screenID: 1,
          aisle: true,
        },
        {
          rowID: 0,
          colID: 2,
          screenID: 1,
          aisle: false,
        },
        {
          rowID: 0,
          colID: 3,
          screenID: 1,
          aisle: true,
        },
        {
          rowID: 0,
          colID: 4,
          screenID: 1,
          aisle: false,
        },
        //next row
        {
          rowID: 1,
          colID: 0,
          screenID: 1,
          aisle: false,
        },
        {
          rowID: 1,
          colID: 1,
          screenID: 1,
          aisle: true,
        },
        {
          rowID: 1,
          colID: 2,
          screenID: 1,
          aisle: false,
        },
        {
          rowID: 1,
          colID: 3,
          screenID: 1,
          aisle: true,
        },
        {
          rowID: 1,
          colID: 4,
          screenID: 1,
          aisle: false,
        },
        //next row
        {
          rowID: 2,
          colID: 0,
          screenID: 1,
          aisle: false,
        },
        {
          rowID: 2,
          colID: 1,
          screenID: 1,
          aisle: true,
        },
        {
          rowID: 2,
          colID: 2,
          screenID: 1,
          aisle: false,
        },
        {
          rowID: 2,
          colID: 3,
          screenID: 1,
          aisle: true,
        },
        {
          rowID: 2,
          colID: 4,
          screenID: 1,
          aisle: false,
        },
        //next row
        {
          rowID: 3,
          colID: 0,
          screenID: 1,
          aisle: false,
        },
        {
          rowID: 3,
          colID: 1,
          screenID: 1,
          aisle: true,
        },
        {
          rowID: 3,
          colID: 2,
          screenID: 1,
          aisle: false,
        },
        {
          rowID: 3,
          colID: 3,
          screenID: 1,
          aisle: true,
        },
        {
          rowID: 3,
          colID: 4,
          screenID: 1,
          aisle: false,
        },
        //next row
        {
          rowID: 4,
          colID: 0,
          screenID: 1,
          aisle: false,
        },
        {
          rowID: 4,
          colID: 1,
          screenID: 1,
          aisle: true,
        },
        {
          rowID: 4,
          colID: 2,
          screenID: 1,
          aisle: false,
        },
        {
          rowID: 4,
          colID: 3,
          screenID: 1,
          aisle: true,
        },
        {
          rowID: 4,
          colID: 4,
          screenID: 1,
          aisle: false,
        },
        //next row
        {
          rowID: 0,
          colID: 0,
          screenID: 2,
          aisle: false,
        },
        {
          rowID: 0,
          colID: 1,
          screenID: 2,
          aisle: true,
        },
        {
          rowID: 0,
          colID: 2,
          screenID: 2,
          aisle: false,
        },
        //next row
        {
          rowID: 1,
          colID: 0,
          screenID: 2,
          aisle: false,
        },
        {
          rowID: 1,
          colID: 1,
          screenID: 2,
          aisle: true,
        },
        {
          rowID: 1,
          colID: 2,
          screenID: 2,
          aisle: false,
        },
      ]);
    });
};

export { seed };
