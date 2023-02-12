let up = (knex) => {
  return knex.schema.createTable("movies", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.string("rating").notNullable();
    table.string("director").notNullable();
    table.string("cast").notNullable();
    table.integer("runtime").notNullable();
    table.string("genre").notNullable();
    table.float("price").notNullable();
  });
};

let down = (knex) => {
  return knex.schema.dropTableIfExists("movies");
};

export { up, down };
