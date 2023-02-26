import { filter } from "./model.js";

let checkUserExists = async (req, res, next) => {
  const { email } = req.body;
  const userExists = await filter({ email });
  if (userExists) {
    res.status(400).json({ message: `User with this email already exists` });
  } else {
    next();
  }
};

let checkEmailExists = async (req, res, next) => {
  const { email } = req.body;
  console.log(req.body);
  const user = await filter({ email });
  if (!user) {
    res.status(404).json({ message: "User with this email does not exist" });
  } else {
    req.user = user;
    next();
  }
};

export { checkUserExists, checkEmailExists };
