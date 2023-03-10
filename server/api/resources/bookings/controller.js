import * as Bookings from "./model.js";
import * as ShowingSeats from "../showingSeats/model.js";

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
    let bookings = await Bookings.getByUserID(userID);
    res.status(200).json({ bookings });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error getting bookings: ${error.message}` });
  }
};

let getBookingByUserIdAndShowingId = async (req, res) => {
  let { userID, showingID } = req.params;
  try {
    let bookings = await Bookings.getByUserIdAndShowingId(userID, showingID);
    res.status(200).json({ bookings });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error getting bookings: ${error.message}` });
  }
};

let addBooking = async (req, res) => {
  try {
    let { userID, showingID, showingSeatID } = req.body;

    let bookingCreated = await Bookings.add({
      userID,
      showingID,
      showingSeatID,
    });

    res.status(201).json({
      message: "Booking added successfully",
      data: { booking: bookingCreated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add booking", error: error.message });
  }
};

let updateBooking = async (req, res) => {
  try {
    let { id } = req.params;
    let { userID, showingID, seatID } = req.body;

    let bookingUpdated = await Bookings.update({
      id,
      userID,
      showingID,
      seatID,
    });

    res.status(200).json({
      message: "Booking updated successfully",
      data: { booking: bookingUpdated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update booking", error: error.message });
  }
};

let deleteBooking = async (req, res) => {
  let { userID, showingID } = req.params;

  try {
    let deletedBookings = await Bookings.del(userID, showingID);
    for (let i = 0; i < deletedBookings.length; i++) {
      await ShowingSeats.update({
        id: deletedBookings[i].showingSeatID,
        occupied: false,
      });
    }
    res.status(200).json({ message: "Booking successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete booking",
      error: error.message,
    });
  }
};

export {
  getAllBookings,
  getBookingByUserID,
  getBookingByUserIdAndShowingId,
  addBooking,
  updateBooking,
  deleteBooking,
};
