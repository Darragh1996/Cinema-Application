import * as jwt from "jsonwebtoken";
import { SECRET } from "../config/index.js";

const validateToken = (token, secret = SECRET) => {
  if (token) {
    try {
      return jwt.verify(token, secret);
    } catch (error) {
      console.log(error.message);
      return undefined;
    }
  } else {
    return undefined;
  }
};

export { validateToken };
