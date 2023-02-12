import express from "express";

const router = express.Router();

import {
  getAllMovies,
  getMovieByID,
  addMovie,
  updateMovie,
  deleteMovie,
} from "./controller.js";

router.get("/", getAllMovies);
router.get("/:id", getMovieByID);
router.post("/", addMovie);
router.post("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;
