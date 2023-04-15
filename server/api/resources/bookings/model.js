import db from "../../../database/dbConfig.js";

let getAll = () => {
  return db("bookings").select("id", "userID", "showingID", "seatID");
};

let getByUserID = (userID) => {
  // return db("bookings")
  //   .leftJoin("users", "bookings.userID", "users.id")
  //   .leftJoin("showings", "bookings.showingID", "showings.id")
  //   .leftJoin("movies", "movies.id", "showings.id")
  //   .leftJoin("showingSeats", "showingSeats.id", "bookings.showingSeatID")
  //   .leftJoin("seats", "seats.id", "showingSeats.seatID")
  //   .select(
  //     "bookings.id",
  //     "users.name as user_name",
  //     "movies.name as film_name",
  //     "bookings.showingID",
  //     "showings.datetime",
  //     "seats.rowID",
  //     "seats.colID"
  //   )
  //   .where({ "bookings.userID": userID });
  return db("bookings")
    .leftJoin("users", "bookings.userID", "users.id")
    .leftJoin("showings", "bookings.showingID", "showings.id")
    .leftJoin("movies", "movies.id", "showings.movieID")
    .leftJoin("showingSeats", "showingSeats.id", "bookings.showingSeatID")
    .leftJoin("seats", "seats.id", "showingSeats.seatID")
    .select(
      "bookings.showingID",
      "movies.name as film_name",
      "showings.datetime",
      db.raw("count(*) as total_bookings")
    )
    .where({ "bookings.userID": userID })
    .groupBy("bookings.showingID", "movies.name", "showings.id");
};

let getByUserIdAndShowingId = (userID, showingID) => {
  return db("bookings")
    .leftJoin("users", "bookings.userID", "users.id")
    .leftJoin("showings", "bookings.showingID", "showings.id")
    .leftJoin("movies", "movies.id", "showings.movieID")
    .leftJoin("showingSeats", "showingSeats.id", "bookings.showingSeatID")
    .leftJoin("seats", "seats.id", "showingSeats.seatID")
    .select(
      "bookings.id",
      "users.name as user_name",
      "movies.name as film_name",
      "bookings.showingID",
      "showings.datetime",
      "seats.rowID",
      "seats.colID"
    )
    .where({ "bookings.userID": userID, "bookings.showingID": showingID });
  // return db("bookings")
  //   .leftJoin("users", "bookings.userID", "users.id")
  //   .leftJoin("showings", "bookings.showingID", "showings.id")
  //   .leftJoin("movies", "movies.id", "showings.id")
  //   .leftJoin("showingSeats", "showingSeats.id", "bookings.showingSeatID")
  //   .leftJoin("seats", "seats.id", "showingSeats.seatID")
  //   .select(
  //     "bookings.showingID",
  //     "movies.name as film_name",
  //     "showings.datetime",
  //     db.raw("count(*) as total_bookings")
  //   )
  //   .where({ "bookings.userID": userID, "bookings.showingID": showingID })
  //   .groupBy("bookings.showingID", "movies.name", "showings.id");
};

let add = async (booking, trx = null) => {
  const query = db("bookings")
    .insert(booking)
    .returning("*")
    .then((newBooking) => {
      return newBooking[0];
    });

  // If a db transaction is provided, use it
  if (trx) {
    return query.transacting(trx);
  } else {
    return query;
  }
};

let update = (booking) => {
  return db("bookings")
    .update(booking)
    .where({ id: booking.id })
    .returning("*")
    .then((updatedBooking) => {
      return updatedBooking[0];
    });
};

let del = (userID, showingID) => {
  // return db("bookings").where({ userID: userID, showingID: showingID }).del();
  return db("bookings")
    .where({ userID: userID, showingID: showingID })
    .returning("*") // This line returns the deleted data
    .del();
};

export { getAll, getByUserID, getByUserIdAndShowingId, add, update, del };
