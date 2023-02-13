import db from "../../../database/dbConfig.js";

let getAll = () => {
  return db("seats").select(
    "id",
    "rowID",
    "colID",
    "screenID",
    "occupied",
    "aisle"
  );
};

let getByScreenID = (screenID) => {
  return db("seats")
    .select("id", "rowID", "colID", "screenID", "occupied", "aisle")
    .where({ screenID: screenID });
};

let add = (seat) => {
  return db("seats")
    .insert(seat)
    .returning("*")
    .then((newSeat) => {
      return newSeat[0];
    });
};

let update = (seat) => {
  return db("seats")
    .update(seat)
    .where({ id: seat.id })
    .returning("*")
    .then((updatedSeat) => {
      return updatedSeat[0];
    });
};

let del = (id) => {
  return db("seats").where({ id }).del();
};

export { getAll, getByScreenID, add, update, del };
