import express from "express";

const router = express.Router();

import {
  getAllScreens,
  getScreenByID,
  addScreen,
  updateScreen,
  deleteScreen,
} from "./controller.js";

import { authorizedAdmin } from "../../middlewares.js";

router.get("/", getAllScreens);
router.get("/:id", getScreenByID);
router.post("/", authorizedAdmin, addScreen);
router.post("/:id", authorizedAdmin, updateScreen);
router.delete("/:id", authorizedAdmin, deleteScreen);

export default router;
