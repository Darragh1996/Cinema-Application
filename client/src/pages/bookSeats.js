import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { justAxios } from "../utils/axios";

import SeatPicker from "../components/seatPicker/seatPicker";
import { PlayCircle } from "react-bootstrap-icons";
import PopUpModal from "../components/popUpModal/popUpModal.js";
import NavBar from "../components/NavBar/NavBar"

function BookSeats() {
  const params = useParams();
  const [colCount, setColCount] = useState(0);
  const [screenID, setScreenID] = useState(0);
  const [movieID, setMovieID] = useState(0);
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieAgeRating, setMovieAgeRating] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [moviePoster, setMoviePoster] = useState("");
  const [selectedShowing, setSelectedShowing] = useState(params.showingID);
  const [dateOption, setDateOption] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [modalDisplay, setModalDisplay] = useState(false);
  const [movieTrailer, setMovieTrailer] = useState("");

  useEffect(() => {
    justAxios()
      .get(`/showings/${selectedShowing}`)
      .then((res) => {
        setMovieName(res.data.showing.name);
        setScreenID(res.data.showing.screenID);
        setMovieID(res.data.showing.movieID);
      });
  }, [selectedShowing]);

  useEffect(() => {
    if (movieID !== 0) {
      justAxios()
        .get(`/movies/${movieID}`)
        .then((res) => {
          setMovieDescription(res.data.movie.details);
          setMovieAgeRating(res.data.movie.rating);
          setMovieGenre(res.data.movie.genre);
          setMoviePoster(res.data.movie.img_poster_url);
          setMovieTrailer(res.data.movie.trailer_url);
        });
      justAxios()
        .get(`showings/view/${movieID}`)
        .then((res) => {
          setDateOption(res.data.showings);
        });
    }
  }, [movieID]);

  useEffect(() => {
    if (movieID !== 0) {
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
      <NavBar/>
      <div className="movieInfoContainer">
        <div className="left-section">
          <img src={moviePoster} alt={movieName} className="movie-img" />
        </div>
        <div className="right-section">
          <h2 className="movie-heading">{movieName}</h2>

          <p className="sub-heading-actors">{movieGenre}</p>

          <div className="movie-info">
            <p className={"rating" + movieAgeRating}>{movieAgeRating}</p>
            <p>{movieDescription}</p>
          </div>

          <div className="dropdown-section">
            <div className="date">
              <label htmlFor="date">Select</label>
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
          <div id="trailerButtonDiv">
            <span
              id="playMovieIcon"
              className="glyphicon glyphicon-play-circle"
              onClick={() => {
                handleModal(movieTrailer);
              }}
            >
              <PlayCircle />
            </span>
            {console.log(trailer)}
          </div>
          {modalDisplay ? (
            <PopUpModal
              setModalDisplay={setModalDisplay}
              linkToYoutubeTrailer={trailer}
              setTrailer={setTrailer}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <h1 className="pickYourSeats">Pick your seats</h1>
        {/* Set the parameters of the SeatPicker Component to the parameters of that selected by the date menu */}
        <SeatPicker showingID={selectedShowing} colCount={colCount} />
      </div>
    </div>
  );
}

export default BookSeats;
