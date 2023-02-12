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

export { getAllUsers, getUserByID };
