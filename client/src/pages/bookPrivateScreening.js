import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { axiosWithAuth, justAxios } from "../utils/axios";

function BookPrivateScreenings() {
  const [showingState, setShowingState] = useState({
    movieID: 1,
    screenID: 1,
    datetime: "",
  });
  const [movies, setMovies] = useState([]);
  const [screens, setScreens] = useState([]);

  const handleChange = (e) => {
    setShowingState({
      ...showingState,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let showing = {
      movieID: parseInt(showingState.movieID),
      screenID: parseInt(showingState.screenID),
      datetime: new Date(showingState.datetime).toISOString(),
    };

    axiosWithAuth()
      .post("/showings/private", showing)
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    justAxios()
      .get("/movies")
      .then((res) => {
        setMovies(res.data.movies);
      });

    axiosWithAuth()
      .get("/screens")
      .then((res) => {
        if (res.data.screens) {
          setScreens(res.data.screens);
        }
      });
  }, []);

  return (
    <div>
      <div id="header" className="text-center my-5">
        <h1>Book Private Screening</h1>
        <div id="headerButtons">
          <Link to="/">
            <button className="btn btn-success">Home</button>
          </Link>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <div className="mb-3">
          Select A Movie:
          <br></br>
          <select>
            <option value="">Select Movie </option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.name}
              </option>
            ))}
          </select>
          <div className="mb-3">
            Screen
            <br />
            <select
              type="text"
              id="screenID"
              name="screenID"
              className="form-select"
              onChange={(event) => handleChange(event)}
            >
              {screens.map((screen) => {
                return <option value={screen.id}>{screen.id}</option>;
              })}
            </select>
          </div>
          <div className="mb-3">
            Date & Time
            <br />
            <input
              type="datetime-local"
              id="datetime"
              name="datetime"
              className="form-control"
              value={showingState.datetime}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <button onClick={handleSubmit}>Book Private Showing</button>
        </div>
      </div>
    </div>
  );
}

export default BookPrivateScreenings;
