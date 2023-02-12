import * as dotenv from "dotenv";

dotenv.config();

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

export default testing;
