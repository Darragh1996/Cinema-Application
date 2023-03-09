import express from "express";

const router = express.Router();

import {
  getAllShowingSeats,
  getShowingSeatsByID,
  addShowingSeats,
  bookShowingSeat,
  deleteShowingSeats,
} from "./controller.js";

import { authorizedAdmin, authorized } from "../../middlewares.js";

router.get("/", getAllShowingSeats);
router.get("/:id", getShowingSeatsByID);
router.post("/", authorizedAdmin, addShowingSeats);
router.post("/book", authorized, bookShowingSeat);
router.delete("/:id", authorizedAdmin, deleteShowingSeats);

export default router;
