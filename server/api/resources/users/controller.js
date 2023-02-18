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

let addUser = async (req, res) => {
  try {
    let { name, email, password, phoneNo } = req.body;

    let userCreated = await Users.add({
      name,
      email,
      password,
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

let updateUser = async (req, res) => {
  try {
    let { id } = req.params;
    let { name, email, password, phoneNo } = req.body;

    let userUpdated = await Users.update({
      id,
      name,
      email,
      password,
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

export { getAllUsers, getUserByID, addUser, updateUser, deleteUser };
