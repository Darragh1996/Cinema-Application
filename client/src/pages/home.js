import React, { useEffect, useState } from "react";

import "../styles.css";

import logo from "../img/logo.png";
import userIcon from "../img/userIcon.png";
import posterWide from "../img/posterwide.png";
import leftArrow from "../img/leftArrow.png";
import rightArrow from "../img/rightArrow.png";
import posterTall from "../img/postertall.png";

function home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // TODO: axios call for movies to go here.

    // this is just mock data
    let mockMovie = {
      poster_img: posterTall,
      name: "Ant-man & the Wasp: Quantumania",
    };
    setMovies([mockMovie, mockMovie, mockMovie]);
  }, []);

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
          <select id="qBMovieName" name="qBMovieName">
            <option value="Black Panther">Select Movie</option>
          </select>
          <label htmlFor="qbDate"></label>
          <select id="qbDate" name="qbDate">
            <option value="Black Panther">Today</option>
          </select>
          <label htmlFor="qbTime"></label>
          <select id="qbTime" name="qbTime">
            <option value="now">Now</option>
          </select>
          <input type="submit" value="Book Now" class="bookNowButton"></input>
        </form>
      </div>
      <div id="posterCarousel">
        <img src={posterWide} alt="bigPoster" />
        <img id="leftArrow" src={leftArrow} alt="leftArrow" />
        <img id="rightArrow" src={rightArrow} alt="rightArrow" />
      </div>
      <div id="moviePosterTrio">
        {movies.map((movie) => {
          return (
            <div
              className="trioPoster"
              style={{ backgroundImage: `url(${movie.poster_img})` }}
            >
              <div className="container">
                <h4 className="trioMovieTitle">{movie.name}</h4>
                <button className="bookNowButton">Book Now</button>
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

export default home;
