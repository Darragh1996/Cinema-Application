let up = (knex) => {
  return knex.schema.createTable("showings", (table) => {
    table.increments();
    table
      .integer("movieID")
      .notNullable()
      .index()
      .references("id")
      .inTable("movies")
      .onDelete("CASCADE");
    table
      .integer("screenID")
      .notNullable()
      .index()
      .references("id")
      .inTable("screens")
      .onDelete("CASCADE");
    table.datetime("datetime").notNullable().defaultTo(knex.fn.now(6));
  });
};

let down = (knex) => {
  return knex.schema.dropTableIfExists("showings");
};

export { up, down };
