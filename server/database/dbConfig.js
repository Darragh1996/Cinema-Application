import knex from "knex";

import * as knexConfig from "../knexfile.js";

const env = process.env.NODE_ENV || "testing";

const configOptions = knexConfig;
console.log(configOptions);

const knexConfigured = knex(configOptions);
console.log(knexConfigured);

export { knexConfigured };
