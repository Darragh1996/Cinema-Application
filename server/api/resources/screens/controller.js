import * as Screens from "./model.js";

let getAllScreens = async (req, res) => {
  try {
    let screens = await Screens.getAll();
    await res.status(200).json({ data: screens });
  } catch (error) {
    res.status(500).json({ message: `Error getting screen: ${error.message}` });
  }
};

let getScreenByID = async (req, res) => {
  let { id } = req.params;
  try {
    let screen = await Screens.getByID(id);
    res.status(200).json({ data: screen });
  } catch (error) {
    res.status(500).json({ message: `Error getting screen: ${error.message}` });
  }
};

let addScreen = async (req, res) => {
  try {
    let { rowCount, colCount } = req.body;

    let screenCreated = await Screens.add({
      rowCount,
      colCount,
    });

    res.status(201).json({
      message: "Screen added successfully",
      data: { screen: screenCreated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add screen", error: error.message });
  }
};

let updateScreen = async (req, res) => {
  try {
    let { id } = req.params;
    let { rowCount, colCount } = req.body;

    let screenUpdated = await Screens.update({
      id,
      rowCount,
      colCount,
    });

    res.status(200).json({
      message: "Screen updated successfully",
      data: { screen: screenUpdated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update screen", error: error.message });
  }
};

let deleteScreen = async (req, res) => {
  let { id } = req.params;

  try {
    await Screens.del(id);
    res.status(200).json({ message: "Screen successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete screen",
      error: error.message,
    });
  }
};

export { getAllScreens, getScreenByID, addScreen, updateScreen, deleteScreen };
