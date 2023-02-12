import express from "express";

const router = express.Router();

import { getAllUsers, getUserByID } from "./controller.js";

router.get("/", getAllUsers);
router.get("/:id", getUserByID);

export default router;
