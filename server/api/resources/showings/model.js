import db from "../../../database/dbConfig.js";

let getAll = () => {
  return db("showings")
    .leftJoin("movies", "showings.movieID", "movies.id")
    .select(
      "showings.id",
      "movies.name",
      "showings.screenID",
      "showings.datetime"
    );
};

let getByID = (id) => {
  return db("showings")
    .leftJoin("movies", "showings.movieID", "movies.id")
    .select(
      "showings.id",
      "movies.id as movieID",
      "movies.name",
      "showings.screenID",
      "showings.datetime"
    )
    .where({ "showings.id": id })
    .first();
};

let getByMovieID = (movieID) => {
  return db("showings")
    .leftJoin("movies", "showings.movieID", "movies.id")
    .select(
      "showings.id",
      "movies.name",
      "movies.id as movieID",
      "showings.screenID",
      "showings.datetime"
    )
    .where({ "movies.id": movieID });
};

let add = (showing) => {
  return db("showings")
    .insert(showing)
    .returning("*")
    .then((newShowing) => {
      return newShowing[0];
    });
};

let update = (showing) => {
  return db("showings")
    .update(showing)
    .where({ id: showing.id })
    .returning("*")
    .then((updatedShowing) => {
      return updatedShowing[0];
    });
};

let del = (id) => {
  return db("showings").where({ id }).del();
};

export { getAll, getByID, getByMovieID, add, update, del };
