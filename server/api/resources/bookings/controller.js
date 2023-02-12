import * as Bookings from "./model.js";

let getAllBookings = async (req, res) => {
  try {
    let bookings = await Bookings.getAll();
    await res.status(200).json({ data: bookings });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error getting bookings: ${error.message}` });
  }
};

let getBookingByUserID = async (req, res) => {
  let { userID } = req.params;
  try {
    let booking = await Bookings.getByID(userID);
    res.status(200).json({ booking });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error getting booking: ${error.message}` });
  }
};

export { getAllBookings, getBookingByUserID };
