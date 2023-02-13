import express from "express";

const router = express.Router();

import {
  getAllSeats,
  getSeatsByScreenID,
  addSeat,
  updateSeat,
  deleteSeat,
} from "./controller.js";

router.get("/", getAllSeats);
router.get("/:id", getSeatsByScreenID);
router.post("/", addSeat);
router.post("/:id", updateSeat);
router.delete("/:id", deleteSeat);

export default router;
