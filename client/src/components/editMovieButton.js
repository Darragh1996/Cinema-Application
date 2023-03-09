import React from "react";
import { Link } from "react-router-dom";

function editMovieButton(props) {
  return <Link to="/editMovie">Edit Movie</Link>;
}

export default editMovieButton;