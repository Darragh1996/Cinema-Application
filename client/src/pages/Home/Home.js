import React, { useEffect, useState } from "react";
import { justAxios } from "../../utils/axios";
import { useNavigate } from "react-router-dom";

// import styles from "./Home.module.css";
import "../../styles.css";

import logo from "./img/logo.png";
import userIcon from "./img/userIcon.png";
import posterWide from "./img/posterwide.png";
import leftArrow from "./img/leftArrow.png";
import rightArrow from "./img/rightArrow.png";
// import posterTall from "./img/postertall.png";

function Home() {
  const [movies, setMovies] = useState([]);
  const [movOption, setMovOption] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateOption, setDateOption] = useState([]);
  // const [selected, setSelectedDate] = useState(null);
  const [selectedShowing, setSelectedShowing] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    justAxios()
      .get("/movies")
      .then((res) => {
        setMovies(res.data.movies.slice(0, 3));
        setMovOption(res.data.movies);
      });
  }, []);

  function handleMovieChange(event) {
    setSelectedMovie(event.target.value);
    const movieId = event.target.value;

    justAxios()
      .get("showings/view/" + movieId)
      .then((res) => {
        setDateOption(res.data.showings);
      });
  }
  function formatDatetime(datetime) {
    const date = new Date(datetime);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDatetime = date.toLocaleDateString("en-GB", options);
    return formattedDatetime;
  }

  function handleDateChange(event) {
    const showingID = event.target.value;
    console.log(showingID);
    setSelectedShowing(showingID);
    console.log(selectedShowing);
  }

  function pickSeats() {
    navigate("/bookSeats/" + selectedShowing);
  }

  return (
    <div>
      <div id="nav">
        <img src={logo} alt="Reel Dreams" />
        <a href>
          <h3>SHOWTIMES</h3>
        </a>
        <img id="userIcon" src={userIcon} alt="User Icon" />
      </div>
      <div id="quickBook">
        <form>
          <label htmlFor="qBMovieName"></label>
          <select
            id="qBMovieName"
            name="qBMovieName"
            onChange={handleMovieChange}
          >
            <option value="">Select Movie </option>
            {movOption.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.name}
              </option>
            ))}
          </select>

          <label htmlFor="qbDate"></label>
          <select
            id="qbDate"
            name="qbDate"
            disabled={!selectedMovie}
            onChange={handleDateChange}
          >
            <option value="">Select Time </option>
            {dateOption.map((date) => (
              <option key={date.id} value={date.id}>
                {formatDatetime(date.datetime)}
              </option>
            ))}
          </select>

          <input
            // type="submit"
            value="Book Now"
            className="bookNowButton"
            disabled={selectedShowing === 0}
            onClick={pickSeats}
          ></input>
        </form>
      </div>
      <div id="posterCarousel">
        <img src={posterWide} alt="bigPoster" />
        <img id="leftArrow" src={leftArrow} alt="leftArrow" />
        <img id="rightArrow" src={rightArrow} alt="rightArrow" />
      </div>
      <div id="moviePosterTrio">
        {movies.map((movie, index) => {
          return (
            <div
              className="trioPoster"
              style={{ backgroundImage: `url(${movie.img_poster_url})` }}
              key={`trioPoster-${index}`}
            >
              <div className="container">
                <h4 className="trioMovieTitle">{movie.name}</h4>
                <button className="bookNowButton" onClick={(e) => pickSeats(e)}>
                  Book Now
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div id="footer">
        <p>Admin</p>
        <p>Contact Us</p>
        <p>Google Maps</p>
        <p>SOCIALS</p>
      </div>
    </div>
  );
}

export default Home;
