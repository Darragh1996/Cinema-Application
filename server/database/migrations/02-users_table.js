let up = (knex) => {
  return knex.schema.createTable("users", (table) => {
    table.increments();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.string("phoneNo").notNullable();
  });
};

let down = (knex) => {
  return knex.schema.dropTableIfExists("users");
};

export { up, down };
