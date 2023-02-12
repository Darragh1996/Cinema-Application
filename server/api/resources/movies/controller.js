import * as Movies from "./model.js";

let getAllMovies = async (req, res) => {
  try {
    let movies = await Movies.getAll();
    await res.status(200).json({ data: movies });
  } catch (error) {
    res.status(500).json({ message: `Error getting movie: ${error.message}` });
  }
};

let getMovieByID = async (req, res) => {
  let { id } = req.params;
  try {
    let movie = await Movies.getByID(id);
    res.status(200).json({ movie });
  } catch (error) {
    res.status(500).json({ message: `Error getting movie: ${error.message}` });
  }
};

export { getAllMovies, getMovieByID };
