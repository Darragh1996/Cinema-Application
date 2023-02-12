import express from "express";
import apiRouter from "./apiRouter.js";

const server = express();

server.use(express.json());

server.use("/api", apiRouter);
server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Reel Dreams API" });
});

export { server };
