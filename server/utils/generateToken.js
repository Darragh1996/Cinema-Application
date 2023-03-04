import * as jwt from "jsonwebtoken";
import { SECRET } from "../config/index.js";

const generateToken = (user, secret = SECRET) => {
  const payload = {
    subject: 0,
    name: user.name,
    email: user.email,
    admin: user.admin,
  };

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secret, options);
};

export { generateToken };
