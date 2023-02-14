import * as dotenv from "dotenv";

dotenv.config();

const development = {
  client: "pg",
  connection: {
    host: process.env.DATABASE_HOST_DEV,
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
    host: process.env.TEST_DATABASE_HOST,
    user: "postgres",
    password: process.env.PASSWORD,
    database: "reel_dreams_test",
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
    host: process.env.DATABASE_HOST_DEV,
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
