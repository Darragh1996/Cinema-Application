import React, { useEffect, useState } from "react";
import { justAxios } from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import MovieSlider from "../../components/movieSlider/movieSlider";
import Footer from "../../components/Footer/Footer.js";

import NavBar from "../../components/NavBar/NavBar.js";

// import styles from "./Home.module.css";
import "../../styles.css";
import "./Home.module.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [dateOption, setDateOption] = useState([]);
  // const [selected, setSelectedDate] = useState(null);
  const [selectedShowing, setSelectedShowing] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    justAxios()
      .get("/movies")
      .then((res) => {
        setMovies(res.data.movies);
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
    setSelectedShowing(showingID);
    console.log(selectedShowing);
  }

  function pickSeats(selectedMovieID, selectedShowingID = 0) {
    navigate(`/bookSeats/${selectedMovieID}`, {
      state: {
        showingID: selectedShowingID,
      },
    });
  }

  return (
    <div>
      <NavBar />
      <div className="carouselBG">
        <div id="posterCarousel">
          {/* <img src={posterWide} alt="bigPoster" /> */}
          {/* <img id="leftArrow" src={leftArrow} alt="leftArrow" />
          <img id="rightArrow" src={rightArrow} alt="rightArrow" /> */}
          <MovieSlider movies={movies} />
        </div>
      </div>
      <div className="quickBook">
        <form style={{ display: "flex", paddingRight: "20px" }}>
          {/* <label className="qbDropdown" htmlFor="qBMovieName"></label> */}
          <select
            id="qBMovieName"
            name="qBMovieName"
            onChange={handleMovieChange}
          >
            <option value="">Select Movie </option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.id}>
                {movie.name}
              </option>
            ))}
          </select>

          {/* <label className="qbDropdown" htmlFor="qbDate"></label> */}
          <select
            id="qbDate"
            name="qbDate"
            disabled={!selectedMovie}
            onChange={handleDateChange}
            style={{ marginLeft: "30px" }}
          >
            <option value="">Select Time </option>
            {dateOption.map((date) => (
              <option key={date.id} value={date.id}>
                {formatDatetime(date.datetime)}
              </option>
            ))}
          </select>

          <button
            // type="submit"
            className="bookNowButton"
            disabled={selectedShowing === 0}
            onClick={() => pickSeats(selectedMovie, selectedShowing)}
            style={{ marginLeft: "30px" }}
          >
            Book Now
          </button>
        </form>
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
                <button
                  onClick={() => pickSeats(movie.id)}
                  className="bookNowButton"
                >
                  Book Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
