import * as dotenv from "dotenv";

dotenv.config();

const development = {
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: process.env.PASSWORD,
    database: "reel_dreams",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: "./database/migrations",
    tableName: "db_migrations",
  },
  seeds: {
    directory: "./database/seeds",
  },
};

const testing = {
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: process.env.PASSWORD,
    database: "reel_dreams",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: "./database/migrations",
    tableName: "db_migrations",
  },
  seeds: {
    directory: "./database/seeds",
  },
};

const production = {
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: process.env.PASSWORD,
    database: "reel_dreams",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: "./database/migrations",
    tableName: "db_migrations",
  },
  seeds: {
    directory: "./database/seeds",
  },
};

export default { development, testing, production };
