import express from "express";

const router = express.Router();

import {
  getAllShowings,
  getShowingByID,
  getShowingByMovieID,
  addShowing,
  updateShowing,
  deleteShowing,
} from "./controller.js";

import { authorized, authorizedAdmin } from "../../middlewares.js";

router.get("/", getAllShowings);
router.get("/:id", getShowingByID);
router.get("/view/:movieID", getShowingByMovieID);
router.post("/", authorizedAdmin, addShowing);
router.post("/:id", authorizedAdmin, updateShowing);
router.delete("/:id", authorizedAdmin, deleteShowing);

export default router;
