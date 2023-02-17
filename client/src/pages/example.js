import React, { useEffect, useState } from "react";

import { justAxios } from "../utils/axios.js";

function example() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    justAxios()
      .get("/movies")
      .then((res) => {
        console.log(res.data.movies);
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
    </div>
  );
}

export default example;
