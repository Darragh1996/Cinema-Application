import db from "../../../database/dbConfig.js";

let getAll = () => {
  return db("users").select("id", "name", "email", "password", "phoneNo");
};

let getByID = (id) => {
  return db("users")
    .select("id", "name", "email", "password", "phoneNo")
    .where({ id: id })
    .first();
};

let add = (user) => {
  return db("users")
    .insert(user)
    .returning("*")
    .then((newUser) => {
      return newUser[0];
    });
};

let update = (user) => {
  return db("users")
    .update(user)
    .where({ id: user.id })
    .returning("*")
    .then((updatedUser) => {
      return updatedUser[0];
    });
};

let del = (id) => {
  return db("users").where({ id }).del();
};

export { getAll, getByID, add, update, del };
