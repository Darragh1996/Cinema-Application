import * as ShowingSeats from "./model.js";
import * as Booking from "../bookings/model.js";

let getAllShowingSeats = async (req, res) => {
  try {
    let showingSeats = await ShowingSeats.getAll();
    await res.status(200).json({ data: showingSeats });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error getting showing seats: ${error.message}` });
  }
};

let getShowingSeatsByID = async (req, res) => {
  let { id } = req.params;
  try {
    let showingSeats = await ShowingSeats.getByID(id);
    res.status(200).json({ showingSeats });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error getting showing seats: ${error.message}` });
  }
};

let addShowingSeats = async (req, res) => {
  try {
    let { seatID, showingID, occupied } = req.body;

    let showingSeatCreated = await ShowingSeats.add({
      seatID,
      showingID,
      occupied,
    });

    res.status(201).json({
      message: "Showing Seat added successfully",
      data: { showingSeat: showingSeatCreated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add showing seat", error: error.message });
  }
};

let bookShowingSeat = async (req, res) => {
  try {
    let { ids, showingID } = req.body;
    let userID = req.decodedToken.subject;

    for (let i = 0; i < ids.length; i++) {
      let updatedShowingSeat = await ShowingSeats.update({
        id: ids[i],
        occupied: true,
      });
      let res = await Booking.add({
        userID,
        showingID,
        showingSeatID: updatedShowingSeat.id,
      });
      console.log(res);
    }

    res.status(200).json({
      message: "Showing Seats booked successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to book showing seat", error: error.message });
  }
};

let cancelShowingSeat = async (req, res) => {
  try {
    // let { id } = req.params;
    let { ids } = req.body;

    for (let i = 0; i < ids.length; i++) {
      await ShowingSeats.update({
        id: ids[i],
        occupied: false,
      });
    }

    res.status(200).json({
      message: "Showing Seats canceled successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to cancel showing seat", error: error.message });
  }
};

let deleteShowingSeats = async (req, res) => {
  let { id } = req.params;

  try {
    await ShowingSeats.del(id);
    res.status(200).json({ message: "Showing seats successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete showing seats",
      error: error.message,
    });
  }
};

export {
  getAllShowingSeats,
  getShowingSeatsByID,
  addShowingSeats,
  bookShowingSeat,
  cancelShowingSeat,
  deleteShowingSeats,
};
