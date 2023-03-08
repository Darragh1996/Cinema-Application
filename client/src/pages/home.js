import React from "react";

import "../styles.css";

import logo from "../img/logo.png";
import userIcon from "../img/userIcon.png";
import posterWide from "../img/posterwide.png";
import leftArrow from "../img/leftArrow.png";
import rightArrow from "../img/rightArrow.png";

function home() {
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
          <label for="qBMovieName"></label>
          <select id="qBMovieName" name="qBMovieName">
            <option value="Black Panther">Select Movie</option>
          </select>
          <label for="qbDate"></label>
          <select id="qbDate" name="qbDate">
            <option value="Black Panther">Today</option>
          </select>
          <label for="qbTime"></label>
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
      <div id="moviePosterTrio"></div>

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
