import express from "express";

const router = express.Router();

import {
  getAllBookings,
  getBookingByUserID,
  getBookingByUserIdAndShowingId,
  addBooking,
  updateBooking,
  deleteBooking,
} from "./controller.js";

import { authorized, authorizedAdmin } from "../../middlewares.js";

router.get("/", authorizedAdmin, getAllBookings);
router.get("/:userID", authorized, getBookingByUserID);
router.get("/:userID/:showingID", getBookingByUserIdAndShowingId);
router.post("/", authorized, addBooking);
// router.post("/:id", updateBooking);
router.delete("/:userID/:showingID", authorized, deleteBooking);

export default router;
