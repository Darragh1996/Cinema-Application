import db from "../../../database/dbConfig.js";

let getAll = () => {
  return db("bookings").select("id", "userID", "showingID", "seatID");
};

let getByID = (userID) => {
  return db("bookings")
    .select("id", "userID", "showingID", "seatID")
    .where({ userID: userID })
    .first();
};

export { getAll, getByID };
