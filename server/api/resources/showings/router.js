import express from "express";

const router = express.Router();

import {
  getAllShowings,
  getShowingByID,
  addShowing,
  updateShowing,
  deleteShowing,
} from "./controller.js";

router.get("/", getAllShowings);
router.get("/:id", getShowingByID);
router.post("/", addShowing);
router.post("/:id", updateShowing);
router.delete("/:id", deleteShowing);

export default router;
