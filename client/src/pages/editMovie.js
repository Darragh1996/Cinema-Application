import React, { useState } from "react";

import { justAxios } from "../utils/axios.js";

function editMovieForm({
  currName,
  currDirector,
  currRating,
  currCast,
  currRuntime,
  currGenre,
}) {
  const [name, setName] = useState(currName);
  const [director, setDirector] = useState(currDirector);
  const [rating, setRating] = useState(currRating);
  const [cast, setCast] = useState(currCast);
  const [runtime, setRuntime] = useState(currRuntime);
  const [genre, setGenre] = useState(currGenre);
  const price = 8.5;

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      justAxios()
        .post("/movies", {
          name: name,
          director: director,
          rating: rating,
          cast: cast,
          runtime: runtime,
          genre: genre,
          price: price,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <label>Name</label>
      <br />
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />

      <label>Director</label>
      <br />
      <input
        name="director"
        type="text"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
      />
      <br />

      <label>Rating</label>
      <br />
      <input
        name="rating"
        type="text"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <br />

      <label>Cast</label>
      <br />
      <input
        name="cast"
        type="text"
        value={cast}
        onChange={(e) => setCast(e.target.value)}
      />
      <br />

      <label>Runtime</label>
      <br />
      <input
        name="runtime"
        type="text"
        value={runtime}
        onChange={(e) => setRuntime(e.target.value)}
      />
      <br />

      <label>Genre</label>
      <br />
      <input
        name="genre"
        type="text"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <br />

      <input className="submitButton" type="submit" value="Add Movie" />
    </form>
  );
}
export default editMovieForm;
