let up = (knex) => {
  return knex.schema.createTable("movies", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.string("rating").notNullable();
    table.string("director").notNullable();
    table.integer("runtime").notNullable();
    table.string("genre").notNullable();
    table.string("details").notNullable();
    table.string("trailer_url").notNullable();
    table.string("img_poster_url").notNullable();
    table.string("img_landscape_url").notNullable();
  });
};

let down = (knex) => {
  return knex.schema.dropTableIfExists("movies");
};

export { up, down };
