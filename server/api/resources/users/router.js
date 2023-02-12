import express from "express";

const router = express.Router();

import {
  getAllUsers,
  getUserByID,
  addUser,
  updateUser,
  deleteUser,
} from "./controller.js";

router.get("/", getAllUsers);
router.get("/:id", getUserByID);
router.post("/", addUser);
router.post("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
