import db from "../../../database/dbConfig.js";

let getAll = () => {
  return db("screens").select("id", "rowCount", "colCount");
};

let getByID = (id) => {
  return db("screens").select("id", "rowCount", "colCount").where({ id });
};

let add = (screen) => {
  return db("screens")
    .insert(screen)
    .returning("*")
    .then((newScreen) => {
      return newScreen[0];
    });
};

let update = (screen) => {
  return db("screens")
    .update(screen)
    .where({ id: screen.id })
    .returning("*")
    .then((updatedScreen) => {
      return updatedScreen[0];
    });
};

let del = (id) => {
  return db("screens").where({ id }).del();
};

export { getAll, getByID, add, update, del };
