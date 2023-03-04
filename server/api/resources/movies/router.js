import express from "express";

const router = express.Router();

import {
  getAllMovies,
  getMovieByID,
  addMovie,
  updateMovie,
  deleteMovie,
} from "./controller.js";

import { authorized, authorizedAdmin } from "../../middlewares.js";

router.get("/", authorized, getAllMovies);
router.get("/:id", authorized, getMovieByID);
router.post("/", authorizedAdmin, addMovie);
router.post("/:id", authorizedAdmin, updateMovie);
router.delete("/:id", authorizedAdmin, deleteMovie);

export default router;
