import React, { useEffect, useState } from "react";

import { justAxios } from "../utils/axios.js";

import NavBar from "../components/NavBar/NavBar"

//show list of movies along with their ids
function ViewMovie() {
    const [films, setFilms] = useState([]);
    const [id, setID] = useState("");

    useEffect(() => {
        justAxios()
            .get("/movies")
            .then((res) => {
                setFilms(res.data.movies);
            });
    }, []);

    //edit using movie id when button is submitted
    let handleSubmit = async (e) => {
        e.preventDefault();
        // let movieToEdit = ("/movies/" + id)
        try {
            function EditMovie({ id }) {
                const [name, setName] = useState("");
                const [director, setDirector] = useState("");
                const [rating, setRating] = useState("");
                const [cast, setCast] = useState("");
                const [runtime, setRuntime] = useState("");
                const [genre, setGenre] = useState("");
                const price = 8.5;
                let handleSubmit = async (f) => {
                    f.preventDefault();
                    let movieToEdit = ("/movies/" + id)
                    try {
                        justAxios()
                            .post(movieToEdit, {
                                name: name,
                                director: director,
                                rating: rating,
                                cast: cast,
                                runtime: runtime,
                                genre: genre,
                                price: price
                            })
                            .then((res) => {
                                console.log(res.data.movie)
                                alert("File Edited");

                            });
                    } catch (err) {
                        console.log(err);
                    }
                };

                return (
                    <div>
                    <NavBar/>

                    <form onSubmit={f => { handleSubmit(f) }}>
                        <label>Name</label>
                        <br />
                        <input
                            name='name'
                            type='text'
                            value={name}
                            onChange={e => setName(e.target.value)}

                        />
                        <br />

                        <label>Director</label>
                        <br />
                        <input
                            name='director'
                            type='text'
                            value={director}
                            onChange={e => setDirector(e.target.value)}
                        />
                        <br />

                        <label>Rating</label>
                        <br />
                        <input
                            name='rating'
                            type='text'
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                        />
                        <br />

                        <label>Cast</label>
                        <br />
                        <input
                            name='cast'
                            type='text'
                            value={cast}
                            onChange={e => setCast(e.target.value)}
                        />
                        <br />

                        <label>Runtime</label>
                        <br />
                        <input
                            name='runtime'
                            type='text'
                            value={runtime}
                            onChange={e => setRuntime(e.target.value)}
                        />
                        <br />

                        <label>Genre</label>
                        <br />
                        <input
                            name='genre'
                            type='text'
                            value={genre}
                            onChange={e => setGenre(e.target.value)}
                        />
                        <br />

                        <input
                            className='submitButton'
                            type='submit'
                            value='Add Movie'
                        />
                    </form>
                    </div>
                )
            }
            EditMovie({id})

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
        </div>
    );
}

