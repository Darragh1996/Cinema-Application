import * as Showings from "./model.js";
import * as ShowingSeats from "../showingSeats/model.js";
import * as Seats from "../seats/model.js";

let getAllShowings = async (req, res) => {
  try {
    let showings = await Showings.getAll();
    await res.status(200).json({ data: showings });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error getting showings: ${error.message}` });
  }
};

let getShowingByID = async (req, res) => {
  let { id } = req.params;
  try {
    let showing = await Showings.getByID(id);
    res.status(200).json({ showing });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error getting showing: ${error.message}` });
  }
};

let getShowingByMovieID = async (req, res) => {
  let { movieID } = req.params;
  try {
    let showings = await Showings.getByMovieID(movieID);
    res.status(200).json({ showings });
  } catch (error) {
    res
      .status(500)
      .json({ message: `Error getting showings: ${error.message}` });
  }
};

let addShowing = async (req, res) => {
  try {
    let { movieID, screenID, datetime } = req.body;

    let showingCreated = await Showings.add({
      movieID,
      screenID,
      datetime,
    });

    let screenSeats = await Seats.getByScreenID(screenID);

    let showingSeats = screenSeats.map((seat) => {
      let newSeat = {
        ...seat,
        showingID: showingCreated.id,
        seatID: seat.id,
        occupied: false,
      };
      delete newSeat.aisle;
      delete newSeat.screenID;
      delete newSeat.colID;
      delete newSeat.rowID;
      delete newSeat.id;
      return newSeat;
    });

    for (let i = 0; i < showingSeats.length; i++) {
      await ShowingSeats.add(showingSeats[i]);
    }

    res.status(201).json({
      message: "Showing added successfully",
      data: { showing: showingCreated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add showing", error: error.message });
  }
};

let updateShowing = async (req, res) => {
  try {
    let { id } = req.params;
    let { movieID, screenID, datetime } = req.body;

    let showingUpdated = await Showings.update({
      id,
      movieID,
      screenID,
      datetime,
    });

    res.status(200).json({
      message: "User updated successfully",
      data: { showing: showingUpdated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update showing", error: error.message });
  }
};

let deleteShowing = async (req, res) => {
  let { id } = req.params;

  try {
    await Showings.del(id);
    res.status(200).json({ message: "Showing successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete showing",
      error: error.message,
    });
  }
};

export {
  getAllShowings,
  getShowingByID,
  getShowingByMovieID,
  addShowing,
  updateShowing,
  deleteShowing,
};
