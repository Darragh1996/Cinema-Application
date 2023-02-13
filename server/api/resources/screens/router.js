import express from "express";

const router = express.Router();

import {
  getAllScreens,
  getScreenByID,
  addScreen,
  updateScreen,
  deleteScreen,
} from "./controller.js";

router.get("/", getAllScreens);
router.get("/:id", getScreenByID);
router.post("/", addScreen);
router.post("/:id", updateScreen);
router.delete("/:id", deleteScreen);

export default router;
