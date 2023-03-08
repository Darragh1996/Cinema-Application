import * as Movies from "./model.js";

let getAllMovies = async (req, res) => {
  try {
    let movies = await Movies.getAll();
    await res.status(200).json({ movies: movies });
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

let addMovie = async (req, res) => {
  try {
    // let { name, director, cast, genre, runtime, price, rating } = req.body;

    let movieCreated = await Movies.add(req.body.movieState);

    res.status(201).json({
      message: "Movie added successfully",
      data: { movie: movieCreated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add movie", error: error.message });
  }
};

let updateMovie = async (req, res) => {
  try {
    let { id } = req.params;
    // let { name, director, cast, genre, runtime, price, rating } = req.body;

    let movieUpdated = await Movies.update({ ...req.body.movieState, id });

    res.status(200).json({
      message: "Movie updated successfully",
      data: { movie: movieUpdated },
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update movie", error: error.message });
  }
};

let deleteMovie = async (req, res) => {
  let { id } = req.params;

  try {
    await Movies.del(id);
    res.status(200).json({ message: "Movie successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete movie",
      error: error.message,
    });
  }
};

export { getAllMovies, getMovieByID, addMovie, updateMovie, deleteMovie };
