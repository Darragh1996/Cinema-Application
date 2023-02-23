import React from "react";
import { Link } from "react-router-dom";

function DeleteMovieButton(props) {
  return <Link to="/deleteMovie">Delete Movie</Link>;
}

export default DeleteMovieButton;