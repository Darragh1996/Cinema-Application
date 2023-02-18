import express from "express";

const router = express.Router();

import {
  getAllShowingSeats,
  getShowingSeatsByID,
  addShowingSeats,
  updateShowingSeat,
  deleteShowingSeats,
} from "./controller.js";

router.get("/", getAllShowingSeats);
router.get("/:id", getShowingSeatsByID);
router.post("/", addShowingSeats);
router.post("/:id", updateShowingSeat);
router.delete("/:id", deleteShowingSeats);

export default router;
