import db from "../../../database/dbConfig.js";

let getAll = () => {
  return db("bookings").select("id", "userID", "showingID", "seatID");
};

let getByUserID = (userID) => {
  return db("bookings")
    .select("id", "userID", "showingID", "seatID")
    .where({ userID: userID });
};

let getByUserIdAndShowingId = (userID, showingID) => {
  return db("bookings")
    .select("id", "userID", "showingID", "seatID")
    .where({ userID: userID, showingID: showingID });
};

let add = (booking) => {
  return db("bookings")
    .insert(booking)
    .returning("*")
    .then((newBooking) => {
      return newBooking[0];
    });
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
  return db("bookings").where({ userID: userID, showingID: showingID }).del();
};

export { getAll, getByUserID, getByUserIdAndShowingId, add, update, del };
