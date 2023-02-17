import express from "express";
import cors from "cors";

import apiRouter from "./apiRouter.js";

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api", apiRouter);
server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Reel Dreams API" });
});

export { server };
