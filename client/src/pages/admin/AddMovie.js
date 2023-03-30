import React, { useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axios.js";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

// import styles from "./AddMovie.module.css";
import "./adminStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MovieForm() {
  const [movieState, setMovieState] = useState({
    name: "",
    rating: "",
    director: "",
    runtime: 0,
    genre: "",
    trailer_url: "",
    img_poster_url: "",
    img_landscape_url: "",
    details: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.name !== "runtime") {
      setMovieState({
        ...movieState,
        [e.target.name]: e.target.value,
      });
    } else {
      if (!/[^0-9]/.test(e.target.value)) {
        setMovieState({
          ...movieState,
          [e.target.name]: e.target.value,
        });
      }
    }
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axiosWithAuth()
        .post("/movies", {
          movieState,
        })
        .then((res) => {
          console.log(res);
          navigate("/admin/movies");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="marginAbove">
      <NavBar />
      <div id="header">
        <h1>Add Movie</h1>
        <div id="headerButtons">
          <Link to="/admin">
            <button className="btn btn-success">Home</button>
          </Link>
          <Link to="/admin/movies">
            <button className="btn btn-danger">Cancel</button>
          </Link>
        </div>
      </div>
      <form onSubmit={(event) => handleSubmit(event)} className="cinemaForm">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Movie Name
          </label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={movieState.name}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Movie Rating
          </label>
          <br />
          <input
            type="text"
            id="rating"
            name="rating"
            className="form-control"
            value={movieState.rating}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="runtime" className="form-label">
            Movie Runtime
          </label>
          <br />
          <input
            type="text"
            id="runtime"
            name="runtime"
            className="form-control"
            value={movieState.runtime}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="director" className="form-label">
            Director
          </label>
          <br />
          <input
            type="text"
            id="director"
            name="director"
            className="form-control"
            value={movieState.director}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="trailer_url" className="form-label">
            Youtube Trailer Embed Link
          </label>
          <br />
          <input
            type="text"
            id="trailer_url"
            name="trailer_url"
            className="form-control"
            value={movieState.trailer_url}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img_poster_url" className="form-label">
            Movie Poster Image URL
          </label>
          <br />
          <input
            type="text"
            id="img_poster_url"
            name="img_poster_url"
            className="form-control"
            value={movieState.img_poster_url}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img_landscape_url" className="form-label">
            Movie Landscape Image URL
          </label>
          <br />
          <input
            type="text"
            id="img_landscape_url"
            name="img_landscape_url"
            className="form-control"
            value={movieState.img_landscape_url}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="details" className="form-label">
            Movie Details
          </label>
          <br />
          <textarea
            type="text"
            id="details"
            name="details"
            className="form-control"
            value={movieState.details}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <input type="submit" value="Add" className="btn btn-primary" />
      </form>
    </div>
  );
}
export default MovieForm;
