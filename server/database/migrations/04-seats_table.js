let up = (knex) => {
  return knex.schema.createTable("seats", (table) => {
    table.increments();
    table.integer("rowID").notNullable();
    table.integer("colID").notNullable();
    table
      .integer("screenID")
      .notNullable()
      .index()
      .references("id")
      .inTable("screens")
      .onDelete("CASCADE");
    table.boolean("aisle").notNullable().defaultTo(false);
  });
};

let down = (knex) => {
  return knex.schema.dropTableIfExists("seats");
};

export { up, down };
