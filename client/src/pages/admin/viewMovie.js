import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PopUpModal from "../../components/popUpModal/popUpModal.js";
import { PlayCircle, Pencil, Trash } from "react-bootstrap-icons";

// import styles from "./ViewMovie.module.css";
import "./adminStyles.css";

import { justAxios } from "../../utils/axios.js";

// import "bootstrap/dist/css/bootstrap.min.css";

function ViewMovie() {
  const [movies, setMovies] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [modalDisplay, setModalDisplay] = useState(false);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    justAxios()
      .get("/movies")
      .then((res) => {
        setMovies(res.data.movies);
      });
  }, [update]);

  useEffect(() => {
    if (trailer) {
      setModalDisplay(true);
    } else {
      setModalDisplay(false);
    }
  }, [trailer]);

  let deleteMovie = async (movieID) => {
    // e.preventDefault();
    // let movieToDelete = ("/movies/" + id)
    try {
      justAxios()
        .delete(`/movies/${movieID}`)
        .then((res) => {
          console.log(res);
          // navigate("/admin/viewMovies");
          setUpdate(!update);
        });
    } catch (err) {
      console.log(err);
    }
  };

  let handleModal = (trailer) => {
    setTrailer(trailer);
  };

  return (
    <div>
      <div id="header">
        <h1>Movie List</h1>
        <div id="headerButtons">
          <Link to="/admin">
            <button className="btn btn-success">Home</button>
          </Link>
          <Link to="/admin/addMovie">
            <button className="btn btn-primary">+ Add Movie</button>
          </Link>
        </div>
      </div>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Rating</th>
            <th scope="col">Runtime</th>
            <th scope="col">Director</th>
            <th scope="col">Trailer</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => {
            return (
              <tr>
                <td>{movie.name}</td>
                <td>{movie.rating}</td>
                <td>{movie.runtime}</td>
                <td>{movie.director}</td>
                <td>
                  <span
                    id="playMovieIcon"
                    class="glyphicon glyphicon-play-circle"
                    onClick={() => {
                      handleModal(movie.trailer_url);
                    }}
                  >
                    <PlayCircle />
                  </span>
                </td>
                <td>
                  <Link to={`/admin/editMovie/${movie.id}`}>
                    <span className="glyphicon glyphicon-edit">
                      <Pencil />
                    </span>
                  </Link>
                </td>
                <td>
                  <Link
                    onClick={() => deleteMovie(movie.id)}
                    to={`/admin/movies`}
                  >
                    <span className="glyphicon glyphicon-trash">
                      <Trash />
                    </span>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
  );
}

export default ViewMovie;
