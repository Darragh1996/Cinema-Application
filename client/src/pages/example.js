import React, { useEffect, useState } from "react";

import { justAxios } from "../utils/axios.js";
import SeatPicker from "../components/seatPicker/seatPicker.js";

function example() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    justAxios()
      .get("/movies")
      .then((res) => {
        setFilms(res.data.movies);
      });
  }, []);

  return (
    <div>
      <h1>Example page</h1>
      <h2>Here's some films:</h2>
      <ul>
        {films.map((film) => {
          return <li key={film.id}>{film.name}</li>;
        })}
      </ul>
      <div>
        <SeatPicker />
      </div>
    </div>
  );
}

export default example;
