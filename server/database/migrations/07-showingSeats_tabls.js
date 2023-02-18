let up = (knex) => {
  return knex.schema.createTable("showingSeats", (table) => {
    table.increments();
    table
      .integer("seatID")
      .notNullable()
      .index()
      .references("id")
      .inTable("seats")
      .onDelete("CASCADE");
    table
      .integer("showingID")
      .notNullable()
      .index()
      .references("id")
      .inTable("showings")
      .onDelete("CASCADE");
    table.boolean("occupied").notNullable().defaultTo(false);
  });
};

let down = (knex) => {
  return knex.schema.dropTableIfExists("showingSeats");
};

export { up, down };
