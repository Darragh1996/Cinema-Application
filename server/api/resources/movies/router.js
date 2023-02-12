import express from "express";

const router = express.Router();

import { getAllMovies, getMovieByID } from "./controller.js";

router.get("/", getAllMovies);
router.get("/:id", getMovieByID);

export default router;
