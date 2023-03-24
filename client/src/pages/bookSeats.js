import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { justAxios } from "../utils/axios";

import SeatPicker from "../components/seatPicker/seatPicker";

function BookSeats() {
  const params = useParams();
  const [colCount, setColCount] = useState(0);
  const [movieName, setMovieName] = useState('');
  const [movieDescription, setMovieDescription] = useState('');
  const [movieAgeRating, setMovieAgeRating] = useState('');
  const [movieGenre, setMovieGenre] = useState('');
  const [selectedShowing, setSelectedShowing] = useState(params.showingID);
  const [dateOption, setDateOption] = useState([]);


  useEffect(() => {
    justAxios()
      .get(`/showings/${params.showingID}`)
      .then((res) => {
        setMovieName(res.data.showing.name)
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
              setMovieGenre(res3.data.movie.genre)

          })  
          justAxios()
          .get("showings/view/" + res.data.showing.movieID)
          .then((res4) => {
            console.log(res4)

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
  }

  return (
    <div>
      <div class="container">

        <div class="left-section">
          <img src="" alt="" class="movie-img"/>
        </div>
        <div class="right-section">

            <h2 class="movie-heading">{movieName}</h2>

            <p class="sub-heading-actors">{movieGenre}</p>

            <div class="movie-info">                
                    <p>{movieAgeRating}</p>
                    <p>{movieDescription}</p>
            </div>

            <div class="dropdown-section">
            
            <div class="date">
                <label for="date">showing</label>
                <select 
                  id="movieTimesBookingChoice"
                  name="movieTimesBookingChoice"
                  onChange={handleDateChange}
                >
                  <option value="">Select Showing</option>
                  {dateOption.map((date) => (
                    <option key={date.id} value={date.id} selected = {date.id === selectedShowing ? 'selected': 'false'}>
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
        <SeatPicker showingID={params.showingID} colCount={colCount} />
      </div>
      
    </div>
  );
}

export default BookSeats;
