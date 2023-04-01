import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { axiosWithAuth, justAxios } from "../utils/axios";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

import "./../styles.css";

function BookPrivateScreenings() {
  const [showingState, setShowingState] = useState({
    movieID: 1,
    screenID: 1,
    datetime: "",
  });
  const [movies, setMovies] = useState([]);
  const [screens, setScreens] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const updateImage = (val) => {
    console.log("update background image");
    setCurrentIndex(val);
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

  const handleChange = (e) => {
    if (e.target.name === "movieID") {
      setShowingState({
        ...showingState,
        movieID: movies[e.target.value].id,
      });
    } else {
      setShowingState({
        ...showingState,
        [e.target.name]: e.target.value,
      });
    }
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

  // console.log(movies[showingState.movieID].img_landscape_url)

  return (
    <div
      className="marginAbove"
      style={{
        backgroundImage:
          movies.length > 0
            ? `linear-gradient(to bottom, rgba(50, 50, 50, 0.8), rgba(50, 50, 50, 1)), url(${movies[currentIndex].img_landscape_url})`
            : "",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <NavBar />

      <div className="bookPrivateScreenHeader">Book Private Screening</div>
      <div className="d-flex flex-column align-items-center ">
        <div className="bookPrivateLabels">
          Select A Movie:
          <br></br>
          <select
            type="text"
            id="movieID"
            name="movieID"
            className="form-select"
            onChange={(event) => {
              handleChange(event);
              updateImage(event.target.value);
            }}
            defaultValue="1"
          >
            {/* <option value="">Select Movie </option> */}
            {movies.map((movie, i) => (
              <option key={movie.id} value={i}>
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
              onChange={(event) => {
                handleChange(event);
              }}
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
          <button className="bookNowButton" onClick={handleSubmit}>
            Book Private Showing
          </button>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "0px", width: "100%" }}>
        <Footer />
      </div>
    </div>
  );
}

export default BookPrivateScreenings;
