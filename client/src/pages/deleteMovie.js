import React, { useEffect, useState } from "react";

import { justAxios } from "../utils/axios.js";

//show list of movies along with their ids
function deleteMovie() {
    const [films, setFilms] = useState([]);
    const [id, setID] = useState("");

    useEffect(() => {
        justAxios()
            .get("/movies")
            .then((res) => {
                setFilms(res.data.movies);
            });
    }, []);


    //delete using movie id when button is submitted
    let handleSubmit = async (e) => {
        e.preventDefault();
        let movieToDelete = ("/movies/" + id)
        try {
            justAxios()
                .delete(movieToDelete)
                .then((res) => {
                    console.log(res)
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
                    value='Delete Movie'
                />
            </form>
        </div>
    );
}

export default deleteMovie;



