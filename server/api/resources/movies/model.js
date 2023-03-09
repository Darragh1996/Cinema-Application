import db from "../../../database/dbConfig.js";

let getAll = () => {
  return db("movies").select(
    "id",
    "name",
    "rating",
    "director",
    "runtime",
    "genre",
    "details",
    "trailer_url",
    "img_poster_url",
    "img_landscape_url"
  );
};

let getByID = (id) => {
  return db("movies")
    .select(
      "id",
      "name",
      "rating",
      "director",
      "runtime",
      "genre",
      "details",
      "trailer_url",
      "img_poster_url",
      "img_landscape_url"
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
