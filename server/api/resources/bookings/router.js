import express from "express";

const router = express.Router();

import { getAllBookings, getBookingByUserID } from "./controller.js";

router.get("/", getAllBookings);
router.get("/:userID", getBookingByUserID);

export default router;
