import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axios.js";
import { useNavigate } from "react-router-dom";
import { justAxios } from "../../utils/axios.js";
import NavBar from "../../components/NavBar/NavBar";

// import styles from "./AddMovie.module.css";
import "./adminStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ShowingForm() {
  const [showingState, setShowingState] = useState({
    movieID: 1,
    screenID: 1,
    datetime: "",
  });
  const [movies, setMovies] = useState([]);
  const [screens, setScreens] = useState([]);
  const navigate = useNavigate();

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
      .post("/showings", showing)
      .then((res) => {
        console.log(res.status);
        navigate("/admin/showings");
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };

  useEffect(() => {
    justAxios()
      .get("/movies")
      .then((res) => {
        setMovies(res.data.movies);
      });

    justAxios()
      .get("/screens")
      .then((res) => {
        if (res.data.screens) {
          setScreens(res.data.screens);
        }
      });
  }, []);

  return (
    <div>
      <NavBar/>
      <div id="header">
        <h1>Add Showing</h1>
        <div id="headerButtons">
          <Link to="/admin">
            <button className="btn btn-success">Home</button>
          </Link>
          <Link to="/admin/showings">
            <button className="btn btn-danger">Cancel</button>
          </Link>
        </div>
      </div>
      <form onSubmit={(event) => handleSubmit(event)} className="cinemaForm">
        <div className="mb-3">
          <label htmlFor="movieID" className="form-label">
            Movie
          </label>
          <br />
          <select
            type="text"
            id="movieID"
            name="movieID"
            className="form-select"
            onChange={(event) => handleChange(event)}
          >
            {movies.map((movie) => {
              return <option value={parseInt(movie.id)}>{movie.name}</option>;
            })}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="screenID" className="form-label">
            Screen
          </label>
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
          <label htmlFor="datetime" className="form-label">
            Showing Date & Time
          </label>
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

        <input type="submit" value="Add" className="btn btn-primary" />
        
      </form>
    </div>
  );
}
export default ShowingForm;
