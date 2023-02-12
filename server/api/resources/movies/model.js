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

let add = (movie) => {
  return db("movies")
    .insert(movie)
    .returning("*")
    .then((newMovie) => {
      return newMovie[0];
    });
};

let update = (movie) => {
  console.log(movie);
  return db("movies")
    .update(movie)
    .where({ id: movie.id })
    .returning("*")
    .then((updatedMovie) => {
      return updatedMovie[0];
    });
};

let del = (id) => {
  return db("movies").where({ id }).del();
};

// let filter = (filter) => {
//   return db("movies")
//     .select(
//       "id",
//       "name",
//       "rating",
//       "director",
//       "cast",
//       "runtime",
//       "genre",
//       "price"
//     )
//     .where(filter)
//     .first();
// };

export { getAll, getByID, add, update, del };
