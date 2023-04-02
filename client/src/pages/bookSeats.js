import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { justAxios } from "../utils/axios";

import SeatPicker from "../components/seatPicker/seatPicker";
import PopUpModal from "../components/popUpModal/popUpModal.js";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function BookSeats() {
  const location = useLocation();
  const params = useParams();
  const [colCount, setColCount] = useState(0);
  const [screenID, setScreenID] = useState(0);
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieAgeRating, setMovieAgeRating] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [moviePosterWide, setMoviePosterWide] = useState("");
  const [movieRunTime, setMovieRunTime] = useState(0);
  const [selectedShowing, setSelectedShowing] = useState(
    location.state ? location.state.showingID : 0
  );
  const [dateOption, setDateOption] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [modalDisplay, setModalDisplay] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState("");

  useEffect(() => {
    justAxios()
      .get(`/movies/${params.movieID}`)
      .then((res) => {
        setMovieDescription(res.data.movie.details);
        setMovieAgeRating(res.data.movie.rating);
        setMovieGenre(res.data.movie.genre);
        setMoviePoster(res.data.movie.img_poster_url);
        setMovieTrailer(res.data.movie.trailer_url);
        setMovieName(res.data.movie.name);
        setMoviePosterWide(res.data.movie.img_landscape_url);
        setMovieRunTime(res.data.movie.runtime);
      });
    justAxios()
      .get(`showings/view/${params.movieID}`)
      .then((res) => {
        console.log("inside the showing axios request");
        setDateOption(res.data.showings);
        if (selectedShowing === 0) {
          setSelectedShowing(res.data.showings[0].id);
        }
      });
  }, []);

  useEffect(() => {
    if (selectedShowing !== 0) {
      justAxios()
        .get(`/showings/${selectedShowing}`)
        .then((res) => {
          setScreenID(res.data.showing.screenID);
        });
    }
  }, [selectedShowing]);

  useEffect(() => {
    if (screenID !== 0) {
      justAxios()
        .get(`/screens/${screenID}`)
        .then((res) => {
          setColCount(res.data.screen.colCount);
        });
    }
  }, [screenID]);

  useEffect(() => {
    if (trailer) {
      setModalDisplay(true);
    } else {
      setModalDisplay(false);
    }
  }, [trailer]);

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
  }

  let handleModal = (trailer) => {
    setTrailer(trailer);
  };

  return (
    <div>
      <NavBar />
      <div
        className="movieInfoContainer"
        style={{
          width: "100%",
          backgroundImage: `linear-gradient(to bottom, rgba(50, 50, 50, 0.85), rgba(50, 50, 50, 0.85)), url(${moviePosterWide})`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bookSeatsPoster">
          <img src={moviePoster} alt={movieName} className="movie-img" />
        </div>
        <div className="bookSeatsMovieDetails">
          <div style={{ fontSize: "40px", color: "white" }}>{movieName}</div>
          <div
            style={{
              display: "flex",
              verticalAlign: "middle",
              lineHeight: "30px",
              color: "#c4c4c4",
              fontSize: "12px",
            }}
          >
            <div>
              <p className={"rating" + movieAgeRating}>{movieAgeRating}</p>
            </div>
            <div style={{ paddingLeft: "12px" }}>{movieGenre}</div>
            <div
              style={{
                paddingLeft: "12px",
                paddingRight: "12px",
                fontSize: "5px",
              }}
            >
              ⬤
            </div>
            <div>{movieRunTime} mins</div>
          </div>
          <div className="movieDesc">
            <p>{movieDescription}</p>
          </div>
          <div id="trailerButtonDiv">
            <span
              id="playMovieIcon"
              className="glyphicon glyphicon-play-circle"
              onClick={() => {
                handleModal(movieTrailer);
              }}
            >
              <button
                className="trailerBtn"
                onClick={() => handleModal(movieTrailer)}
              >
                TRAILER
              </button>
              {modalDisplay ? (
                <PopUpModal
                  setModalDisplay={setModalDisplay}
                  linkToYoutubeTrailer={trailer}
                  setTrailer={setTrailer}
                />
              ) : (
                ""
              )}
            </span>
            {console.log(trailer)}
          </div>
        </div>
      </div>
      <div className="selectDateOuterDiv">
        <div>
          <label className="selectShowingBookSeats" htmlFor="date">
            Selected Showing:
          </label>
          <select
            id="movieTimesBookingChoice"
            name="movieTimesBookingChoice"
            onChange={handleDateChange}
            value={selectedShowing}
          >
            {dateOption.map((date) => (
              <option key={date.id} value={date.id}>
                {formatDatetime(date.datetime)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        {/* Set the parameters of the SeatPicker Component to the parameters of that selected by the date menu */}
        <SeatPicker showingID={selectedShowing} colCount={colCount} />
      </div>
      <Footer />
    </div>
  );
}

export default BookSeats;
