let up = (knex) => {
  return knex.schema.createTable("bookings", (table) => {
    table.increments();
    table
      .integer("userID")
      .notNullable()
      .index()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("showingID")
      .notNullable()
      .index()
      .references("id")
      .inTable("showings")
      .onDelete("CASCADE");
    table
      .integer("seatID")
      .notNullable()
      .index()
      .references("id")
      .inTable("seats")
      .onDelete("CASCADE");
  });
};

let down = (knex) => {
  return knex.schema.dropTableIfExists("bookings");
};

export { up, down };
