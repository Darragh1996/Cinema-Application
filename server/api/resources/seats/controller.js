import * as Seats from "./model.js";

let getAllSeats = async (req, res) => {
  try {
    let seats = await Seats.getAll();
    await res.status(200).json({ data: seats });
  } catch (error) {
    res.status(500).json({ message: `Error getting seat: ${error.message}` });
  }
};

let getSeatsByScreenID = async (req, res) => {
  let { id } = req.params;
  try {
    let seats = await Seats.getByScreenID(id);
    res.status(200).json({ data: seats });
  } catch (error) {
    res.status(500).json({ message: `Error getting seat: ${error.message}` });
  }
};

let addSeat = async (req, res) => {
  try {
    let { rowID, colID, screenID, aisle } = req.body;

    let seatsCreated = await Seats.add({
      rowID,
      colID,
      screenID,
      aisle,
    });

    res.status(201).json({
      message: "Seat added successfully",
      data: { seats: seatsCreated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add seat", error: error.message });
  }
};

let updateSeat = async (req, res) => {
  try {
    let { id } = req.params;
    let { rowID, colID, screenID, aisle } = req.body;

    let seatUpdated = await Seats.update({
      id,
      rowID,
      colID,
      screenID,
      aisle,
    });

    res.status(200).json({
      message: "Seat updated successfully",
      data: { seat: seatUpdated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update seat", error: error.message });
  }
};

let deleteSeat = async (req, res) => {
  let { id } = req.params;

  try {
    await Seats.del(id);
    res.status(200).json({ message: "Seat successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete seat",
      error: error.message,
    });
  }
};

export { getAllSeats, getSeatsByScreenID, addSeat, updateSeat, deleteSeat };
