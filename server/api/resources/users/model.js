import db from "../../../database/dbConfig.js";

let getAll = () => {
  return db("users").select("id", "name", "email", "phoneNo");
};

let getByID = (id) => {
  return db("users")
    .select("id", "name", "email", "phoneNo")
    .where({ id: id })
    .first();
};

export { getAll, getByID };
