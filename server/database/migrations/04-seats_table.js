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
    table.boolean("occupied").notNullable().defaultsTo(false);
    table.boolean("aisle").notNullable().defaultsTo(false);
  });
};

let down = (knex) => {
  return knex.schema.dropTableIfExists("seats");
};

export { up, down };
