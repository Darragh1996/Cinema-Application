import React, { useState } from "react";
import { justAxios } from "../../utils/axios.js";

import "./adminStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function movieForm() {
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

  const handleChange = (e) => {
    if (e.target.name != "runtime") {
      setMovieState({
        ...movieState,
        [e.target.name]: e.target.value,
      });
    } else {
      if (!/[^0-9]/.test(e.target.value)) {
        console.log("runtime hello");

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
      justAxios()
        .post("/movies", {
          name: movieState.name,
          director: movieState.director,
          rating: movieState.rating,
          runtime: movieState.runtime,
          genre: movieState.genre,
          trailer_url: movieState.trailer_url,
          img_landscape_url: movieState.img_landscape_url,
          img_poster_url: movieState.img_poster_url,
          details: movieState.details,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div id="header">
        <h1>Add Movie</h1>
        <div id="headerButtons">
          <a href="/">
            <button className="btn btn-success">Home</button>
          </a>
          <a href="/movies">
            <button className="btn btn-danger">Cancel</button>
          </a>
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
export default movieForm;
