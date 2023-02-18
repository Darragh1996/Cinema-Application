import * as ShowingSeats from "./model.js";

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

let updateShowingSeat = async (req, res) => {
  try {
    let { id } = req.params;
    let { seatID, showingID, occupied } = req.body;

    let showingSeatUpdated = await ShowingSeats.update({
      id,
      seatID,
      showingID,
      occupied,
    });

    res.status(200).json({
      message: "Showing Seat updated successfully",
      data: { showingSeat: showingSeatUpdated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update showing seat", error: error.message });
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
  updateShowingSeat,
  deleteShowingSeats,
};
