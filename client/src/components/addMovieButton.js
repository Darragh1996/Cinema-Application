import React from "react";
import { Link } from "react-router-dom";

function AddMovieButton(props) {
  return <Link to="/addMovie">Add Movie</Link>;
}

export default AddMovieButton;