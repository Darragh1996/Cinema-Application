import * as Showings from "./model.js";
import * as ShowingSeats from "../showingSeats/model.js";
import * as Seats from "../seats/model.js";
import * as Movies from "../movies/model.js";
import * as Bookings from "../bookings/model.js";

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

let getAllPublicShowings = async (req, res) => {
  try {
    let showings = await Showings.getAllPublic();
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
    let { movieID, screenID, price, datetime } = req.body;

    let showings = await Showings.getByScreenID(screenID);
    let movie = await Movies.getByID(movieID);

    let movieRuntimeSeconds = movie.runtime * 60 * 1000;
    let dateTimeSeconds = new Date(datetime).getTime();

    let conflictFound = false;

    for (let i = 0; i < showings.length; i++) {
      let otherShowingTime = new Date(showings[i].datetime).getTime();

      if (
        dateTimeSeconds >= otherShowingTime &&
        dateTimeSeconds < otherShowingTime + movieRuntimeSeconds
      ) {
        conflictFound = true;
        break;
      }
    }

    if (conflictFound) {
      res.status(400).json({
        message: "A showing already exists at the selected datetime & screen",
      });
    } else {
      let showingCreated = await Showings.add({
        movieID,
        screenID,
        price,
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
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add showing", error: error.message });
  }
};

let addPrivateShowing = async (req, res) => {
  try {
    let { movieID, screenID, datetime } = req.body;

    let showings = await Showings.getByScreenID(screenID);
    let movie = await Movies.getByID(movieID);

    let movieRuntimeSeconds = movie.runtime * 60 * 1000;
    let dateTimeSeconds = new Date(datetime).getTime();

    let conflictFound = false;

    for (let i = 0; i < showings.length; i++) {
      let otherShowingTime = new Date(showings[i].datetime).getTime();

      if (
        dateTimeSeconds >= otherShowingTime &&
        dateTimeSeconds < otherShowingTime + movieRuntimeSeconds
      ) {
        conflictFound = true;
        break;
      }
    }

    if (conflictFound) {
      res.status(400).json({
        message: "A showing already exists at the selected datetime & screen",
      });
    } else {
      let showingCreated = await Showings.add({
        movieID,
        screenID,
        price: 120.0,
        private: true,
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

      let showingSeatIds = [];

      for (let i = 0; i < showingSeats.length; i++) {
        let newSeat = await ShowingSeats.add(showingSeats[i]);
        if (screenSeats[i].aisle === false) {
          showingSeatIds.push(newSeat.id);
        }
      }

      let userID = req.decodedToken.subject;

      for (let i = 0; i < showingSeatIds.length; i++) {
        let updatedShowingSeat = await ShowingSeats.update({
          id: showingSeatIds[i],
          occupied: true,
        });
        await Bookings.add({
          userID,
          showingID: showingCreated.id,
          showingSeatID: updatedShowingSeat.id,
        });
      }

      res.status(201).json({
        message: "Private showing added successfully",
        data: { showing: showingCreated },
      });
    }
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
  getAllPublicShowings,
  getShowingByID,
  getShowingByMovieID,
  addShowing,
  addPrivateShowing,
  updateShowing,
  deleteShowing,
};
