import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { justAxios } from "../utils/axios";

import SeatPicker from "../components/seatPicker/seatPicker";

function BookSeats() {
  const params = useParams();
  const [colCount, setColCount] = useState(0);
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieAgeRating, setMovieAgeRating] = useState("");
  const [movieGenre, setMovieGenre] = useState("");
  const [selectedShowing, setSelectedShowing] = useState(params.showingID);
  const [dateOption, setDateOption] = useState([]);

  useEffect(() => {
    justAxios()
      .get(`/showings/${params.showingID}`)
      .then((res) => {
        setMovieName(res.data.showing.name);
        justAxios()
          .get(`/screens/${res.data.showing.screenID}`)
          .then((res2) => {
            setColCount(res2.data.screen.colCount);
          });
        justAxios()
          .get(`/movies/${res.data.showing.movieID}`)
          .then((res3) => {
            setMovieDescription(res3.data.movie.details);
            setMovieAgeRating(res3.data.movie.rating);
            setMovieGenre(res3.data.movie.genre);
          });
        justAxios()
          .get("showings/view/" + res.data.showing.movieID)
          .then((res4) => {
            setDateOption(res4.data.showings);
          });
      });
  }, []);

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
    justAxios()
      .get(`/showings/${showingID}`)
      .then((res4) => {
        justAxios()
          .get(`/screens/${res4.data.showing.screenID}`)
          .then((res5) => {
            setColCount(res5.data.screen.colCount);
          });
      });
  }

  return (
    <div>
      <div className="container">
        <div className="left-section">
          <img src="" alt="" className="movie-img" />
        </div>
        <div className="right-section">
          <h2 className="movie-heading">{movieName}</h2>

          <p className="sub-heading-actors">{movieGenre}</p>

          <div className="movie-info">
            <p>{movieAgeRating}</p>
            <p>{movieDescription}</p>
          </div>

          <div className="dropdown-section">
            <div className="date">
              <label htmlFor="date">showing</label>
              <select
                id="movieTimesBookingChoice"
                name="movieTimesBookingChoice"
                onChange={handleDateChange}
                value={selectedShowing}
              >
                <option value="">Select Showing</option>
                {dateOption.map((date) => (
                  <option key={date.id} value={date.id}>
                    {formatDatetime(date.datetime)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Pick your seats.</h1>
        {/* Set the parameters of the SeatPicker Component to the parameters of that selected by the date menu */}
        <SeatPicker showingID={selectedShowing} colCount={colCount} />
      </div>
    </div>
  );
}

export default BookSeats;
