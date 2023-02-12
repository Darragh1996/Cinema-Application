import knex from "knex";

import knexConfig from "../knexfile.js";

const env = process.env.NODE_ENV || "testing";

const configOptions = knexConfig[env];

export default knex(configOptions);
