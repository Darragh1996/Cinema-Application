import express from "express";

const router = express.Router();

import moviesRouter from "./resources/movies/router.js";
import usersRouter from "./resources/users/router.js";
import bookingsRouter from "./resources/bookings/router.js";
import seatsRouter from "./resources/seats/router.js";

router.use("/movies", moviesRouter);
router.use("/users", usersRouter);
router.use("/bookings", bookingsRouter);
router.use("/seats", seatsRouter);

export default router;
