import express from "express";

const router = express.Router();

import moviesRouter from "./resources/movies/router.js";
import usersRouter from "./resources/users/router.js";
import bookingsRouter from "./resources/bookings/router.js";
import seatsRouter from "./resources/seats/router.js";
import screensRouter from "./resources/screens/router.js";
import showingsRouter from "./resources/showings/router.js";
import showingSeatsRouter from "./resources/showingSeats/router.js";

router.use("/movies", moviesRouter);
router.use("/users", usersRouter);
router.use("/bookings", bookingsRouter);
router.use("/seats", seatsRouter);
router.use("/screens", screensRouter);
router.use("/showings", showingsRouter);
router.use("/showingSeats", showingSeatsRouter);

export default router;
