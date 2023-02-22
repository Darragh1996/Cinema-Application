import db from "../../../database/dbConfig.js";

let getAll = () => {
  return db("showingSeats")
    .leftJoin("seats", "showingSeats.seatID", "seats.id")
    .select(
      "showingSeats.id",
      "showingSeats.showingID",
      "showingSeats.occupied",
      "showingSeats.seatID",
      "seats.rowID",
      "seats.colID",
      "seats.aisle"
    );
};

let getByID = (showingID) => {
  return db("showingSeats")
    .leftJoin("seats", "showingSeats.seatID", "seats.id")
    .select(
      "showingSeats.id",
      "showingSeats.showingID",
      "showingSeats.occupied",
      "showingSeats.seatID",
      "seats.rowID",
      "seats.colID",
      "seats.aisle"
    )
    .where({ "showingSeats.showingID": showingID })
    .orderBy("showingSeats.id");
};

let add = (showingSeat) => {
  return db("showingSeats")
    .insert(showingSeat)
    .returning("*")
    .then((newShowingSeat) => {
      return newShowingSeat[0];
    });
};

let update = (showingSeat) => {
  return db("showingSeats")
    .update({ occupied: true })
    .where({ id: showingSeat.id })
    .returning("*")
    .then((updatedShowingSeat) => {
      return updatedShowingSeat[0];
    });
};

let del = (showingID) => {
  return db("showingSeats").where({ showingID }).del();
};

export { getAll, getByID, add, update, del };
