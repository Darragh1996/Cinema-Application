import db from "../../../database/dbConfig.js";

let getAll = () => {
  return db("movies").select(
    "id",
    "name",
    "rating",
    "director",
    "cast",
    "runtime",
    "genre",
    "price"
  );
};

let getByID = (id) => {
  return db("movies")
    .select(
      "id",
      "name",
      "rating",
      "director",
      "cast",
      "runtime",
      "genre",
      "price"
    )
    .where({ id: id })
    .first();
};

export { getAll, getByID };
