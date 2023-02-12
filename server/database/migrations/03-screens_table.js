let up = (knex) => {
  return knex.schema.createTable("screens", (table) => {
    table.increments();
    table.integer("colCount").notNullable();
    table.integer("rowCount").notNullable();
  });
};

let down = (knex) => {
  return knex.schema.dropTableIfExists("screens");
};

export { up, down };
