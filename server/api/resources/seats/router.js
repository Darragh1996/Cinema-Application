import express from "express";

const router = express.Router();

import {
  getAllSeats,
  getSeatsByScreenID,
  addSeat,
  updateSeat,
  deleteSeat,
} from "./controller.js";

import { authorizedAdmin } from "../../middlewares.js";

// router.get("/", getAllSeats);
router.get("/:id", authorizedAdmin, getSeatsByScreenID);
router.post("/", authorizedAdmin, addSeat);
router.post("/:id", authorizedAdmin, updateSeat);
router.delete("/:id", authorizedAdmin, deleteSeat);

export default router;
