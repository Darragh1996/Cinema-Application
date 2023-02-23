import express from "express";

const router = express.Router();

import {
  getAllUsers,
  getUserByID,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} from "./controller.js";
import { checkUserExists, checkEmailExists } from "./middlewares.js";

router.get("/", getAllUsers);
router.get("/login", checkEmailExists, loginUser);
router.get("/:id", getUserByID);
router.post("/", checkUserExists, registerUser);
router.post("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
