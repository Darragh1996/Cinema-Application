import bcrypt, { hash } from "bcrypt"; 
//had to comment this out to get server to run
import * as Users from "./model.js";

let getAllUsers = async (req, res) => {
  try {
    let users = await Users.getAll();
    await res.status(200).json({ data: users });
  } catch (error) {
    res.status(500).json({ message: `Error getting users: ${error.message}` });
  }
};

let getUserByID = async (req, res) => {
  let { id } = req.params;
  try {
    let user = await Users.getByID(id);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: `Error getting user: ${error.message}` });
  }
};

let registerUser = async (req, res) => {
  try {
    let { name, email, password, phoneNo } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    let userCreated = await Users.add({
      name,
      email,
      password: hashedPassword,
      phoneNo,
    });

    res.status(201).json({
      message: "User added successfully",
      data: { user: userCreated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add user", error: error.message });
  }
};

let loginUser = async (req, res) => {
  try {
    const {
      user,
      body: { password },
    } = req;

    /* 1st is user submitted password. 2nd is hashed stored password */
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (isPasswordValid) {
      delete user.password;

      res.status(200).json({
        message: `Welcome. You're logged in!`,
        data: { user },
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    res.status(500).json({ message: `Failed to log user in` });
  }
};

let updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    let { name, email, password, phoneNo } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    let userUpdated = await Users.update({
      id,
      name,
      email,
      password: hashedPassword,
      phoneNo,
    });

    res.status(200).json({
      message: "User updated successfully",
      data: { movie: userUpdated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update user", error: error.message });
  }
};

let deleteUser = async (req, res) => {
  let { id } = req.params;

  try {
    await Users.del(id);
    res.status(200).json({ message: "User successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete user",
      error: error.message,
    });
  }
};

export {
  getAllUsers,
  getUserByID,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
};
