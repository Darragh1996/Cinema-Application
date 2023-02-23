import React, { useEffect, useState } from "react";

import { justAxios } from "../utils/axios.js";

//show list of movies along with their ids
function viewMovie() {
    const [films, setFilms] = useState([]);
    const [id, setID] = useState("");
    const [movie,setMovie]=useState({});

    useEffect(() => {
        justAxios()
            .get("/movies")
            .then((res) => {
                setFilms(res.data.movies);
            });
    }, []);

    //view using movie id when button is submitted
    let handleSubmit = async (e) => {
        e.preventDefault();
        let movieToView = ("/movies/" + id)
        try {
            justAxios()
                .get(movieToView)
                .then((res) => {
                    console.log(res.data.movie)
                    setMovie(res.data.movie)
                });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>

            <ul>
                {films.map((film) => {
                    return <ul key={film.id}>{film.id}: {film.name}</ul>;
                })}
            </ul>

            <form onSubmit={e => { handleSubmit(e) }}>
                {/* Get users input for the selected id */}
                <label>Movie ID:</label>
                <br />
                <input
                    name='id'
                    type='text'
                    value={id}
                    onChange={e => setID(e.target.value)}
                />

                <input
                    className='submitButton'
                    type='submit'
                    value='View Movie'
                />
            </form>
          {
             movie ? (
                <div>
                    <h2>{movie.name}</h2>
                </div>
               ): ""
          }
        </div>
    );
}

export default viewMovie;