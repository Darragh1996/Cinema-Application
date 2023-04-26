import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { axiosWithAuth } from "../../utils/axios.js";
import { justAxios } from "../../utils/axios.js";
import NavBar from "../../components/NavBar/NavBar";

// import styles from "./AddMovie.module.css";
import "./adminStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

function EditShowingForm() {
  const [showingState, setShowingState] = useState({
    id: 0,
    movieID: 1,
    screenID: 1,
    datetime: "",
  });
  //   const [showing, setShowing] = useState
  const [movies, setMovies] = useState([]);
  const [screens, setScreens] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (e) => {
    setShowingState({
      ...showingState,
      [e.target.name]: e.target.value,
    });
    console.log(showingState);
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    let showing = {
      movieID: parseInt(showingState.movieID),
      screenID: parseInt(showingState.screenID),
      datetime: new Date(showingState.datetime).toISOString(),
    };
    try {
      axiosWithAuth()
        .post(`/showings/${params.showingID}`, showing)
        .then((res) => {
          console.log(res);
          navigate("/admin/showings");
        });
    } catch (err) {
      console.log(err);
    }
    console.log(showing);
  };

  useEffect(() => {
    justAxios()
      .get(`/showings/${params.showingID}`)
      .then((res) => {
        const date = new Date(res.data.showing.datetime);

        // Format the Date object to a string suited to
        // the required format of datetime-local
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, "0");
        const day = String(date.getUTCDate()).padStart(2, "0");
        const hours = String(date.getUTCHours()).padStart(2, "0");
        const minutes = String(date.getUTCMinutes()).padStart(2, "0");
        const formattedDatetime = `${year}-${month}-${day}T${hours}:${minutes}`;

        setShowingState({
          ...res.data.showing,
          datetime: formattedDatetime,
        });
      });

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
    <div className="marginAbove">
      <NavBar/>
      <div id="header">
        <h1>Edit Showing</h1>
        <div id="headerButtons">
          <Link to="/admin" style={{ textDecoration: 'none' }}>
            <button className="btn btn-success">Home</button>
          </Link>
          <Link to="/admin/showings" style={{ textDecoration: 'none' }}>
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
              return (
                <option
                  value={parseInt(movie.id)}
                  selected={showingState.movieID === movie.id}
                >
                  {movie.name}
                </option>
              );
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
              return (
                <option
                  value={screen.id}
                  selected={showingState.screenID === screen.id}
                >
                  {screen.id}
                </option>
              );
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

        <input type="submit" value="Edit" className="bookNowButton" />
      </form>
    </div>
  );
}
export default EditShowingForm;
