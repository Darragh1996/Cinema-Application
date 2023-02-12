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

router.get("/", getAllBookings);
router.get("/:userID", getBookingByUserID);
router.get("/:userID/:showingID", getBookingByUserIdAndShowingId);
router.post("/", addBooking);
router.post("/:id", updateBooking);
router.delete("/:userID/:showingID", deleteBooking);

export default router;
