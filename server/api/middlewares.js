import jwt from "jsonwebtoken";
import { SECRET } from "../config/index.js";

const authorized = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ error: err.message });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({
      error: "Unauthenticated = please provide a valid token.",
    });
  }
};

const authorizedAdmin = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ error: err.message });
      } else {
        if (decodedToken.admin === true) {
          req.decodedToken = decodedToken;
          next();
        } else {
          res.status(401).json({
            error: "Unauthenticated - You are not an admin.",
          });
        }
      }
    });
  } else {
    res.status(401).json({
      error: "Unauthenticated - please provide a valid token.",
    });
  }
};

export { authorized, authorizedAdmin };
